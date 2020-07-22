//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
//level order traversal with a twist


//strategy: leve order traversal using a stack and a queue, flipping between them on alternating levels
const zigzagLevelOrder = root => {
  
  //define a result array
  let zigZag = []
  
  //define a stack, a queue, and an even/odd level tracker
  let stack = []
  let queue = []
  let even = true
  
  //validate input and initialize the stack
  root && stack.push(root)
  
  //iterate through the stack, time is total nodes in the tree = O(n)
  while (stack.length) {

    //define the level width, and a level result array, space = O(max tree width) = O(w)
    let length = stack.length
    let level = []
    
    for (let i = 0; i < length; i++) {
      
      //get the current node and push it's value to the level array
      let node = stack.pop()
      level.push(node.val)
      
      //if we are on an even level ...
      if (even) {
        
        //add the left node first ...
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
        
      } else {
        
        //otherwise, add the right node first
        node.right && queue.push(node.right)        
        node.left && queue.push(node.left)
        
      }
      
    }
    
    //push the level array to our result, flip the even boolean, replace the stack with the queue, and reset the queue
    zigZag.push(level)
    even = !even
    stack = queue
    queue = []
    
  }
  
  //total time = O(n)
  //total space = O(w)
  return zigZag
  
}