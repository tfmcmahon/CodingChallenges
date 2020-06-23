// https://leetcode.com/problems/satisfiability-of-equality-equations/
// DFS / Union find

const equationsPossible = equations => {
  
  //Initialize maps for connected components and separate components
  let sameList = new Map()
  let diffList = new Map()
  
  //destructure the equations (we know input is validated)
  for (let [left, operator, _, right] of equations) {
      
    //if equality, add to the connected components map
    if (operator === '=') {
      if (!sameList.has(left)) sameList.set(left, new Set())
      if (!sameList.has(right)) sameList.set(right, new Set())
      
      sameList.get(left).add(right)
      sameList.get(right).add(left)
    //else at the the disjointed components map
    } else {
      if (left === right) return false
      if (!diffList.has(left)) diffList.set(left, new Set())
      if (!diffList.has(right)) diffList.set(right, new Set())
      
      diffList.get(left).add(right)
      diffList.get(right).add(left)
    }
  }
  
  //initialize a colors map to serve as a component ID and a visited set
  let colors = new Map()
  let color = 1
  
  //loop through the connected component map
  for (let item of sameList.keys()) {
    //set a 'paint color'; change it for new components
    let paint = color++
    //if we haven't painted the node, perform DFS to paint all nodes in the component
    if (!colors.has(item)) {

      colors.set(item, paint)
      let stack = [item]
      
      while (stack.length) {
        let node = stack.pop()
        
        if (sameList.get(node)) {
          for (let adj of sameList.get(node)) {
            //color each connected node and set it as colored/visited
            if (!colors.has(adj)) {
              colors.set(adj, paint)
              stack.push(adj)
            }
          }
        }
      }
    }
  }
  
  //iterate through the disjointed map to check for violations
  for (let item of diffList.keys()) {
    //paint nodes that we haven't seen
    let paint = color++
    if (!colors.has(item)) colors.set(item, paint)
    
    if (diffList.get(item)) {
      for (let adj of diffList.get(item)) {
        //if a node is the same color as a disjointed node, return false
        if (colors.get(item) === colors.get(adj)) return false
      }
    }
  }
 
  return true
}