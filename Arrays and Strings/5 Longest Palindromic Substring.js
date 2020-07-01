//https://leetcode.com/problems/longest-palindromic-substring/
//

const longestPalindrome = str => {

  //store longest palindrome length and string
  let maxPal = 0
  let longest = ''
  
  //loop through the string = O(n)
  for (let i = 0; i < str.length; i++) {
    //set left and right pointers at i to expand outward
    let j = i
    let k = i
    
    //check to the left and right for a character match. If found, move the corresponding pointer
    //time = O(n * n)
    while (j > 0 && str.charAt(j - 1) == str.charAt(i)) j--
    while (k < str.length - 1 && str.charAt(k + 1) == str.charAt(i)) k++
    
    //expand the pointers while checking that their characters match ...
    //... if they dont, return the pointers to a previous match and exit the loop
    // time = O(n * (2 * n))
    while (j-- >= 0 && k++ < str.length) {
      if (str.charAt(j) !== str.charAt(k)) {
        j++
        k--
        break
      }      
      if (j == 0 || k == str.length - 1) break
    }

    //check if the width of the current palindrome is longer than the previous
    if (k - j + 1 > maxPal) {
      //if it is, update the longest length variable and store the palindrome string
      maxPal = k - j + 1
      longest = str.substring(j, k + 1)
    }
  }
  
  //total time = O(n ^ 2)
  return longest
}