//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
//BFS with height tracking


const connect = root => {
 
  //define the queue
  let queue = []

  //validate input and initialize the queue
  if (root) queue.push(root)
  
  //perform bfs = O(n)
  while (queue.length) {
    
    let n = queue.length

    //stop after each heighth of the tree so that we know when to point a right edge node to null
    while (n--) {
      
      let node = queue.shift()
      
      //link the node to its next right neighbor; if no neighbor, link to null
      node.next = n ? queue[0] : null
      
      //continue BFS if there are more nodes left in the tree
      if (node.left) queue.push(node.left, node.right)
      
    }
    
  }
  
  //total time = O(n), total space = O(1)
  return root
}