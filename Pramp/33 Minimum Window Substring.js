//https://leetcode.com/problems/minimum-window-substring/
//sliding window with frequency map


const minWindow = (S, T) => {
  
  let minLength = Infinity
  let minString = ''
  let tFreqMap = getMap(T)
  let windowFreqMap = new Map()
  let left = 0
  
    for (let right = 0; right < S.length; right++) {
    
    let success = true
    let currentLength = right - left + 1
    
    tFreqMap.set(S[right], (tFreqMap.get(S[right]) || 0) - 1)
    
    while (success) {
    
      for (let [key, value] of tFreqMap.entries()) {

        if (!windowFreqMap.has(key) || windowFreqMap.get(key) < value) {

          success = false
          break

        }

      }

      if (success) {

        if (currentLength < minLength) {

          minLength = currentLength
          minString = S.substring(left, right + 1)

        }

      }
      
      left++
    
    }
    
  }
  
  return minString
  
}

const getMap = string => {
  
  let freqMap = new Map()
  
  for (let char of string) {
    
    freqMap.set(char, (freqMap.get(char) || 0) + 1)
    
  }
  
  return freqMap
  
}

/*

Name of peer: Marcel
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/