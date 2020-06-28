//https://leetcode.com/problems/reconstruct-itinerary/
//DFS with backtracking

const findItinerary = tickets => {
  
  //initialize an adjacency list, a stack, and a result array
  let adjList = getMap(tickets)
  let stack = ['JFK']
  let itinerary = []

  //perform DFS with back-tracking = O(n)
  while (stack.length) {

    let node = stack.pop()

    //if the map doesn't have the node OR the node has no values, it must be the last possible node ...
    if (!adjList.has(node) || !adjList.get(node).length) {

      //... therefore, add it to the front of our itinerary
      itinerary.unshift(node)

    //otherwise it has edges ...
    } else {
      
      //... back-track by putting the node back onto the stack, then ...
      stack.push(node)
      //... remove the next lexical node from the map and add it to the stack
      stack.push(adjList.get(node).shift())
    }
  }
  
  //total time = O(n * m * log(m))
  //O(n * m * log(m)) + O(n), drop lower order term
  return itinerary
}

const getMap = tickets => {
  
  let adjList = new Map()
  
  //loop through the tickets array = O(n)
  for (let [u, v] of tickets) {
    //if the adjacency list doesn't have the starting city, initialize it as []
    !adjList.has(u) && adjList.set(u, [])
    
    //get the starting city and add the destination to its value array
    adjList.get(u).push(v)
    //sort the values lexicographically per the problem stipulation = O(m * log m)
    adjList.get(u).sort()
  }
  
  //total time to create the list = O(n * m * log(m))
  return adjList
}