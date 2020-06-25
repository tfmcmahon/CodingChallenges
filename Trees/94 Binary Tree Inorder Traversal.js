//https://leetcode.com/problems/binary-tree-inorder-traversal/


const inorderTraversal = root => {
    
  let result = []
  let stack = []
  
  //input validation and being DFS
  if (root) stack.push(root)
  
  //perform DFS
  while(stack.length) {
    
    let node = stack.pop()
    
    //if we see a left side node
    if (node.left) {
      
      //back track by re-adding the current node onto the stack
      stack.push(node)
      //add the new node to the stack
      stack.push(node.left)
      //prevent memory error, the tree becomes infinite other wise
      node.left = null
    
    //otherwise, move to the right
    } else {
      
      result.push(node.val)
      
      if (node.right) stack.push(node.right)
    }
  }
  
  return result
}
