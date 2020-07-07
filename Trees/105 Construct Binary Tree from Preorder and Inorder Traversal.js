//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


const buildTree = (preorder, inorder) => {
  
  if (!preorder.length) return null
  
  let stack = []
  
  let root = new TreeNode(preorder[0])
  stack.push(root)
  
  let pIndex = 1
  let iIndex = 0

  while (stack.length) {
    
    let top = stack[stack.length - 1]
    let node

    if (top.val != inorder[iIndex]) {
      node = new TreeNode(preorder[pIndex++])
      top.left = node
    } else {
      if (++iIndex == inorder.length) break
      
      stack.pop()
      if (stack.length && stack[stack.length - 1].val == inorder[iIndex]) continue
      
      node = new TreeNode(preorder[pIndex++])
      top.right = node
    }
    
    stack.push(node)
  }
  

  return root
}