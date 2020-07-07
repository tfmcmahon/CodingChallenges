//https://leetcode.com/problems/longest-repeating-character-replacement/


//strategy: use the sliding window technique. Maintain left and right pointers.
//Iterate through the array with the right pointer, keeping track of the most frequent character.
//if the length of the window - most frequent character > k, increment the left pointer until ...
//... the window is small enough. Continue searching for another, more frequent character.
const characterReplacement = (s, k) => {
    
  //define longest substring, left pointer, most frequent character, character array
  let longest = 0
  let left = 0
  let freq = 0
  let map = Array(255).fill(0)
  
  //iterate through the string, time = O(n)
  for (let right = 0; right < s.length; right++) {
    
    //calculate the most frequent character while incrementing the current character
    freq = Math.max(freq, ++map[s.charCodeAt(right)])
    
    //if the window length minus the most frequent character is larger than the stipulation ...
    while (right - left + 1 - freq > k) {
      //decrement the left pointer's charcter and increment the left pointer
      map[s.charCodeAt(left++)]--
    }
    
    //calculate the longest substring
    longest = Math.max(longest, right - left + 1)
  }
  
  //total time = O(n)
  //total space = O(255)
  return longest
}