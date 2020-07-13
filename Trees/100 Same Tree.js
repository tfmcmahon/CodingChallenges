//https://leetcode.com/problems/same-tree/


var isSameTree = (p, q) => {
    
  //put both trees into their own queue
  let pQueue = []
  let qQueue = []
  
  p && pQueue.push(p)
  q && qQueue.push(q)
  
  while (pQueue.length || qQueue.length) {
    
    let pLen = pQueue.length
    let qLen = qQueue.length
    
    if (pLen !== qLen) {
      console.log('length')
      return false
    }
    
    while (pLen--) {
      
      let pNode = pQueue.pop()
      let qNode = qQueue.pop()
      
      if (!qNode && !pNode) continue
      if (!qNode || !pNode|| pNode.val !== qNode.val) return false
      
      pQueue.unshift(pNode.left)
      pQueue.unshift(pNode.right)
      qQueue.unshift(qNode.left)
      qQueue.unshift(qNode.right)
      
    }
    
  }
  
  return true
  
}