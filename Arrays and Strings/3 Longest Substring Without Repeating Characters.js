//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//sliding window

const lengthOfLongestSubstring = str => {
 
  //initialize a set (O(n) space), a maximum, and the left pointer
  let set = new Set()
  let max = 0
  let left = 0
  
  //loop through the string, moving each pointer. time = O(n)
  for (let right = 0; right < str.length; right++) {
    
    //store the right character for convenience
    let rightChar = str.charAt(right)
    
    //if the set has the right character, move the left pointer forward
    while (set.has(rightChar)) {
      //get the left character and increment the left pointer
      let leftChar = str.charAt(left++)
      //remove the left character from the set
      set.delete(leftChar)
    }

    //add the right character to the set
    set.add(rightChar)
    //evaluate the maximum
    max = Math.max(max, right - left + 1)
  }
  
  //total time and space = O(n)
  return max
}