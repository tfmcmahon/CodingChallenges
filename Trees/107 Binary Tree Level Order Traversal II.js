//https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
//reverse level order traversal of a tree


//strategy, perform BFS using a queue, check the queue length and iterate through that many nodes ...
//... which preserves the level order
const levelOrderBottom = root => {
  
  //define result array, a queue, and validate input
  let levels = []  
  let queue = []
  root && queue.push(root)
  
  //perform BFS = O(n)
  while (queue.length) {

    //define an array to push level values into. 
    //Store the length of the queue ...
    let level = []    
    let length = queue.length

    //... which is the amount of times to iterate before pushing a level. Decrement the length after each iteration
    while (length--) {
      
      //remove the first item in the queue and push it's value to the level array
      let node = queue.shift()    
      level.push(node.val)      

      //check for left and right nodes, if they exist add them to the back of the queue.
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    //after finishing a level, put it at the front of the result array (reverse order)
    levels.unshift(level)
  }
  
  //total time and space = O(n)
  return levels
}