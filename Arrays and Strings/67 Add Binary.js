//https://leetcode.com/problems/add-binary/
//bit manipulation or string manipulation


//loop through the strings, add char at i/j of each string, remember and remainder (sum > 1)
const addBinary = (a, b) => {
  
  //define a remainder and the output string
  let remainder = 0
  let sum = ''
  
  //loop through the strings in reverse, continue until both strings are completed. Time = O(n)
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    
    //convert and store each string's character
    //use or 0 to account for different sized strings
    let aChar = parseInt(a[i]) || 0
    let bChar = parseInt(b[j]) || 0
    
    //calculate the current sum of characters and remainder
    let subSum = aChar + bChar + remainder

    //if we're under 2 ...
    if (subSum <= 1) {
      
      //build the string, right to left. Clear the remainder
      sum = subSum + sum
      remainder = 0
    
    } else {
      
      //build the string with the appropriate digit (0 if we are at 2, else 1). set the remainder to 1
      sum = (subSum === 2 ? '0' : '1') + sum
      remainder = 1
   
    }
    
  }
  
  //if we have a remainder after the loop, attach a 1 to the front of the string
  sum = (remainder ? '1' : '') + sum
  
  //total time = O(n)
  return sum
  
}