//https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
//bellman-ford

const findTheCity = (n, edges, d) => {
 
    //initialize a memo table to store all shortest path values
    //we are going to find the shortest path to every node, giving each node a turn as the starting node
    let memo = [...Array(n)].map(() => Array(n).fill(Infinity))
    //create an adjacency list
    let adjList = getMap(edges)
    
    //loop through the memo table
    for (let i = 0; i < n; i++) {
      
      //initialize the starting node and queue
      memo[i][i] = 0
      let queue = [i]
      
      //perform BFS
      while (queue.length) {
        let u = queue.shift()
        
        if (adjList.get(u)) {
          for (let [v, w] of adjList.get(u)) {
            //if we found a shorter path to a node, update the memo table and add the node to the queue  
            if (memo[i][v] > memo[i][u] + w) {
              memo[i][v] =  memo[i][u] + w
              queue.push(v)
            }
          }
        }
      }
    }
  
    let min = Infinity
    let city
    
    for (let i = 0; i < n; i++) {
      let count = 0
      for (let j = 0; j < n; j++) {
        if (i !== j && memo[i][j] <= d) count++
      }
      if (min >= count) {
        min = count
        city = i
      }
    }
  
    return city
}
  
const getMap = edges => {

    let adjList = new Map()

    //iterate through the edge list
    for (let [u, v, w] of edges) {
        
        //if the map doesn't have a node key, add it
        if (!adjList.has(u)) adjList.set(u, [])
        if (!adjList.has(v)) adjList.set(v, [])
        
        //add connected edge + weight pairs
        adjList.get(u).push([v, w])
        adjList.get(v).push([u, w])
    }

    return adjList
}