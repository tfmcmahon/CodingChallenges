//https://leetcode.com/problems/generate-parentheses/
//


const generateParenthesis = n => {
  
  //validate input and initialize a stack, the stack carries the building string,
  //the number of open parens and close parens.
  let stack = []
  n && stack.push(['(', 1, 0])
  
  let validPairs = []
  
  //perform DFS = O(n) time
  while (stack.length) {
    
    //destructure the node
    let [str, open, closed] = stack.pop()
    
    //if the string payload is the desired length, push it to the result array
    if (str.length === 2 * n) validPairs.push(str)
    else {
      //build the string, every stack addition needs to update the string payload and ...
      //... tally what type of parens we've added

      //if we have the same amount of open and closed parens, we must add an open
      if (open === closed) stack.push([str + '(', open + 1, closed])

      //if we've reach the maximum amount of open parens, add a closed
      else if (open === n) stack.push([str + ')', open, closed + 1])

      //else, add an iteration for each
      else {
        stack.push([str + '(', open + 1, closed])
        stack.push([str + ')', open, closed + 1])
      }
    }
  }
  
  //total time = O(n)
  return validPairs
}