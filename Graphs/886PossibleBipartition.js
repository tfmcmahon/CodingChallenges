//https://leetcode.com/problems/possible-bipartition/
//graph coloring

let possibleBipartition = (N, dislikes) => {

  //initilaize adjacency list, color map, and a queue
  let map = getMap(dislikes)
  let colors = new Map()
  let queue = []
  
  //loop through the map, initializing the queue
  for (let node of map.keys()) {
    //if the node has not been colored, color it (two colored map, we'll use 1 and -1)
    //then, add it to the queue
    if (!colors.has(node)) {
        colors.set(node, 1)
        queue.push(node)
    }
    
    //process the queue
    while (queue.length) {
      let current = queue.shift()
      
      //get all of the node's adjacent nodes
      for (let adj of map.get(current)) {
        //if the adj node has not been colored, color it (opposite of parent)
        if (!colors.has(adj)) {
          colors.set(adj, -colors.get(current))
          //then, add it to the queue
          queue.push(adj)
          //otherwise, check if it has the same value as its parent, if it does, return false
        } else if (colors.get(adj) === colors.get(current)) return false
      }
    }
  }
  
  //after processing the queue, return
  return true
}

const getMap = dislikes => {
  
  let map = new Map()
  
  //build the adjacency list
  for (let [u, v] of dislikes) {
      //if the item is not in the adj list yet, initialize it with an empty array
      if (!map.has(u)) map.set(u, [])
      if (!map.has(v)) map.set(v, [])
      
      //add each node the the corresponding list item
      map.get(u).push(v)
      map.get(v).push(u)
  }
  
  return map
}