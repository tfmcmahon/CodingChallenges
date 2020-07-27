//https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/


const buildTree = (inorder, postorder) => {
  
  let map = new Map()
  
  for (let i = 0; i < inorder.length; i++) map.set(inorder[i], i)
  
  const buildTree = (left, right) => {
    
    if (left > right) return null
    
    let val = postorder.pop()
    let root = new TreeNode(val)
    
    root.right = buildTree(map.get(val) + 1, right)
    root.left = buildTree(left, map.get(val) - 1)
    
    return root
    
  }
  
  return buildTree(0, inorder.length - 1)
  
}