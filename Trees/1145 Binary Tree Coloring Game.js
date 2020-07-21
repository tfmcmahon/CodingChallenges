//https://leetcode.com/problems/binary-tree-coloring-game/


const btreeGameWinningMove = (root, n, x) => {
  
  let [left, right] = getNeighbors(root, x)
  let redTreeSize = getTreeSize(root, x)
  let blue2 = getTreeSize(root, left)
  let blue3 = getTreeSize(root, right)
    
  if (n - redTreeSize > redTreeSize) return true
  if (n - blue2 < blue2 || n - blue3 < blue3) return true
  
  return false
  
}


const getNeighbors = (root, x) => {
  
  let queue = []
  let left = 0, right = 0
  
  root && queue.push(root)
  
  while (queue.length) {
    
    let node = queue.pop()
    
    if (node.val === x) {
      
      left = node.left ? node.left.val : 0
      right = node.right ? node.right.val : 0
      break
      
    }
    
    node.left && queue.unshift(node.left)
    node.right && queue.unshift(node.right)
    
  }
  
  return [left, right]
  
}

const getTreeSize = (root, x) => {
  
  let queue = []
  let subSize = []
  
  root && queue.push(root)
  
  while (queue.length) {
    
    let node = queue.pop()
    
    if (node.val === x) {
      
      subSize.push(node)
      break
      
    }
    
    node.left && queue.unshift(node.left)
    node.right && queue.unshift(node.right)
    
  }
  
  let subTotal = 0
  
  while (subSize.length) {
    
    let node = subSize.pop()
    
    subTotal++
    
    node.left && subSize.unshift(node.left)
    node.right && subSize.unshift(node.right)
    
  }
  
  return subTotal
  
}