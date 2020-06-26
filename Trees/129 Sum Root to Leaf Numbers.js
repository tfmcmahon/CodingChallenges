//https://leetcode.com/problems/sum-root-to-leaf-numbers/
//Binary tree traveral with DFS


const sumNumbers = root => {
  
  //input validation
  if (!root) return 0
  
  //initialize stack with a root node and a number represented by a string
  //and a sum variable to sum all the leaf numbers
  let stack = [[root, '']]
  let sum = 0
  
  //perform DFS using the stack
  while (stack.length) {
    
    let [node, str] = stack.pop()
    
    //update the carried string with the node value
    str = str + node.val
    
    //if there is a child node, continue with DFS
    if (node.left || node.right) {
      if (node.left) stack.push([node.left, str])
      if (node.right) stack.push([node.right, str])
    }
    //if not, parse the string and add it to the total sum
    else sum += Number(str)
    
  }

  return sum
}