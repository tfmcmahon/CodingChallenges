//https://leetcode.com/problems/palindrome-partitioning/
//backtracking


//strategy: recursively check if each substring of the string is a palindrome.
//send a left pointer and an construction array into the recursive function
const partition = s => {
  
  //define a result array and a palindrome checker
  let partitions = []

  const isPalindrome = (left, right) => {
    
    //expand the pointers to check if the substring is a palindrome
    while (left < right) {
      
      if (s[left++] !== s[right--]) return false
      
    }
    
    return true
    
  }
  
  //recursive function
  const getPals = (left, list) => {
    
    //if the left pointer is at the end of the string, push the array and exit
    if (left === s.length) partitions.push(list)
    else {
      
      //else, iterate through the string with a right pointer, starting at the left pointer
      for (let right = left; right < s.length; right++) {
        
        //check if the substring is a palindrome
        if (isPalindrome(left, right)) {
          
          //if it is, continue the recursion, sending the right pointer + 1 and the list concated with the palindromic substring
          getPals(right + 1, [...list, s.substring(left, right + 1)])
          
        }
        
      }
      
    }
    
  }
  
  //start recursion with a left pointer at 0 and an empty array
  getPals(0, [])
  
  return partitions
  
}