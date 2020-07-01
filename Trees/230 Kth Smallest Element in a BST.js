//https://leetcode.com/problems/kth-smallest-element-in-a-bst/
//BST in order traversal

//strategy - traverse the tree in order, stopping when we see the kth element
const kthSmallest = (root, k) => {
  
  //problem description doesn't require input validation

  //define a stack and a traversal count
  let stack = [root]
  let count = 0
   
  //perform in order traversal
  while (stack.length) {
    
    let node = stack.pop()
    
    //iterate on the left side of the tree if we can
    if (node.left) {
      
      //clone the left node and set it to null
      let temp = node.left
      node.left = null
      //back-track to the parent node and put it back onto the stack (since we set the left to null we won't infintely loop)
      stack.push(node)
      //push the stored node.left onto the stack
      stack.push(temp)
      
    //iterate on the right side  
    } else if (node.right) {
      
      //push the right node (lower in the stack than the parent since the value will be higher)
      stack.push(node.right)
      //set the right node to null and back-track to the parent
      node.right = null      
      stack.push(node)
    
    //if we don't see left or right, we've reached the next node in order
    } else {
      //tally it, and check if it's equal to k, if it is, return the node's value
      if (++count === k) return node.val
      //total time and space = O(n)
    }
  }
}