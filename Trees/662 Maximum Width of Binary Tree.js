//https://leetcode.com/problems/maximum-width-of-binary-tree/
//tree with math


//strategy: level order traversal with BFS/queue, maintain tree node and position value as part of queue item
//stop at each level, calculate the min and max positions by looping through all level indeces
//once done, check for a max level width
const widthOfBinaryTree = root => {
  
  //define a queue and a max width variable
  let queue = [[root, 0]]
  let maxWidth = 0
  
  //iterate through the queue = O(n)
  while (queue.length) {
    
    //define a level length, and min/max positions
    let length = queue.length
    let min = Infinity
    let max = -Infinity
    
    //iterate through the level = O(h)
    for (let i = 0; i < length; i++) {
      
      //remove and look at the first item in the queue, calculate the min/max positions
      let [node, position] = queue.pop()
      min = Math.min(min, position)
      max = Math.max(max, position)
      
      //continue traversing if there are children. Position of left is prev position * 2 + 1 ...
      //position of right is prev position * 2 + 2. This is to account for 0 indexing the root
      node.left && queue.unshift([node.left, position * 2 + 1])
      node.right && queue.unshift([node.right, position * 2 + 2])
      
    }
    
    //ternary for special case; level length is exactly onem else max - min + 1
    let levelWidth = length === 1 ? 1 : max - min + 1
    //check for largest width
    maxWidth = Math.max(maxWidth, levelWidth)
    
  }
  
  //total time = O(n * h)
  //total space = O(n)
  return maxWidth
  
}