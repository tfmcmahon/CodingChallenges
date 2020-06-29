//150. Evaluate Reverse Polish Notation

const evalRPN = tokens => {

  //build object to store math operations
  let operate = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    //use Math.trunc to satisfy the requirement of rounding towards zero ...
    //... as opposed to Math.floor which rounds to the lower integer
    '/': (x, y) => Math.trunc(x / y)
  }
  
  //create a stack
  let stack = []
  
  //iterate through tokens, time = O(n)
  for (let token of tokens) {

    //if we don't see an operator, transform the string into an integer and add it to the stack
    if (!operate[token]) {
      
      stack.push(Number(token))
    } else {
      
      //if we see an operator, pop the last two items from the the sack
      let right = stack.pop()
      let left = stack.pop()
      //use the operator on them and push the result to the stack
      stack.push(operate[token](left, right))
    }
  }
  
  //total time = O(n)
  return stack.pop()
}