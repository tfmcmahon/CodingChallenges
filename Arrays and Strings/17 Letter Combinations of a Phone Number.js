//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
//strings alongside map and array while using DFS

const letterCombinations = digits => {
  
  //initialize and populate a number to letter phone dictionary
  let phone = new Map()
  phone.set('2', ['a', 'b', 'c'])
  phone.set('3', ['d', 'e', 'f'])
  phone.set('4', ['g', 'h', 'i'])
  phone.set('5', ['j', 'k', 'l'])
  phone.set('6', ['m', 'n', 'o'])
  phone.set('7', ['p', 'q', 'r', 's'])
  phone.set('8', ['t', 'u', 'v'])
  phone.set('9', ['w', 'x', 'y', 'z'])

  let stack = []
  let perms = []
  
  //input validation and initialize the stackm each item will have the digits and a stored string
  if (digits) stack.push([digits, ''])
  
  //iterate through the stack
  while (stack.length) {
    
    let [node, str] = stack.pop()
    
    //iterate through each letter that corresponds to the left side of the number string
    for (let letter of phone.get(node.charAt(0))) {
      
      //update the letter permutation
      let perm = str + letter
      
      //if the digit string has any additional digits, push it to the stack with the progressed letter string
      if (node.length - 1) stack.push([node.substring(1), perm])
      //otherwise, add the finished letter string to the perms array
      else perms.push(perm)
    }
    
  }
  
  //O(d * μl)
  //d = digit length, μl = average letters to digit
  return perms
}