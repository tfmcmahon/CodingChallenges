//https://leetcode.com/problems/get-equal-substrings-within-budget/


//strategy: iterate through the string with a right pointer, storing the total const to swap characters ...
//... if the cost goes above the limit argument, increment a left pointer until we meet the stipulation ...
//... calculate the max length after each right pointer increment.
const equalSubstring = (s, t, maxCost) => {
  
  //define max length, left pointer, and current cost
  let longestSubstr = 0
  let left = 0
  let cost = 0
  
  //iterate through the strings, time = O(n)
  for (let right = 0; right < s.length; right++) {
    
    //sum the cost of the right pointer's character
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))
    
    //if we go over budget ...
    while (cost > maxCost) {
      
      //... move the left pointer, subtracting the character cost each time
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
      left++
      
    }
    
    //calculate the max substring
    longestSubstr = Math.max(longestSubstr, right - left + 1)
    
  }
  
  //total time = O(n)
  //total space = O(1)
  return longestSubstr
  
}