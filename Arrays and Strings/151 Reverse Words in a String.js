//https://leetcode.com/problems/reverse-words-in-a-string/
//manipulate strings without built in tools


//strategy: iterate through the string, store the current character. Check if we are at the end of a word
//do something based on that info
const reverseWords = s => {
    
  let reversed = ''
  let word = ''
  
  //loop through the word, total time = O(n)
  for (let i = 0; i < s.length; i++) {  
       
    let char = s.charAt(i)

    //if the current character is a space and we are building a word we've reach the end of a word...
    if (char === ' ' && word) {
      
        //... if we have a result in process, add the word to the front of the result
        //... else we don't have anything in the result yet, set the result to the word
        reversed = reversed ? `${word} ${reversed}` : word
        //reset the word
        word = ''
      
    //else we are still in the middle of a word, continue building the word
    //total space = O(n) in the worst case if we have no spaces.
    } else if (char !== ' ') word += char
      
  }

  //when we exit the loop and we have a word stored ...
  //check if we have any result, if we do add the word to it ...
  //if not set the result to the word
  if (word) reversed = reversed ? `${word} ${reversed}` : word
  
  //total time = O(n)
  //total space = O(n)
  return reversed
  
}