//https://leetcode.com/problems/count-complete-tree-nodes/
//binary tree node counting, time complexity challenge

//bfs
const countNodes = root => {
    
  if (!root) return 0
  
  let queue = [root]
  let nodes = 0
  let h = 0
  
  while (queue.length) {
      let size = queue.length
      nodes += size
      if (Math.pow(2, h++) !== size) break

      while (size-- > 0) {
          let node = queue.shift()            
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
      }
  }
      
  return nodes
}

//binary search
const countNodes = root => {
    
  if (!root) return 0
  
  let stack = binarySearch(root, [])

  let left = Math.pow(2, stack.length)
  let right = Math.pow(2, stack.length + 1) - 1
  
  for (let i = 0; i < stack.length; i++) {
      if (stack[i] === 'L') right = Math.floor((left + right) / 2)
      else left = Math.ceil((left + right) / 2)
  }
  
  return right
}

const getDepth = node => {
  if (!node.left) return 1
  return getDepth(node.left) + 1
}

const binarySearch = (node, stack) => {
  
  let left = node.left ? getDepth(node.left) : 0
  let right = node.right ? getDepth(node.right) : 0

  if (!left) return stack
  if (left === right) {
      stack.push('R')
      stack = binarySearch(node.right, stack)
  } else {
      stack.push('L')
      stack = binarySearch(node.left, stack)
  }
  
  return stack
}