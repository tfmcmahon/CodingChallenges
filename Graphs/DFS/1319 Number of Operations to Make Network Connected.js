//https://leetcode.com/problems/number-of-operations-to-make-network-connected/
//DFS / Union find

const makeConnected = (n, connections) => {
  
  //if there are insufficient connections, return -1
  if (connections.length + 1 < n) return -1
  
  //initialize an adjacency list, add all nodes from 0 to n - 1 to the list
  let adjList = new Map()
  
  for (let i = 0; i < n; i++) {
    adjList.set(i, [])
  }
  
  //iterate through the connections to build the adjacency list
  for (let [u, v] of connections) {      
    adjList.get(u).push(v)
    adjList.get(v).push(u)
  }
  
  //initialize a visisted set and a total number of components,
  //we will return total number of components - 1 since we want 1 total component
  let visited = new Set()
  let components = 0
  
  //loop through the adjacency list
  for (let node of adjList.keys()) {
    //if we have not yet visited the node...
    if (!visited.has(node)) {
      visited.add(node)
      
      //perform DFS
      let stack = [node]
      
      while (stack.length) {
        let current = stack.pop()
        
        //search all of its connections
        if (adjList.get(current)) {
          for (let adj of adjList.get(current)) {
            if (!visited.has(adj)) {
              visited.add(adj)
              stack.push(adj)
            }
          }
        }
      }
      //once the stack is cleared, we can tally a component
      components++
    }
  }
  
  return components - 1
}