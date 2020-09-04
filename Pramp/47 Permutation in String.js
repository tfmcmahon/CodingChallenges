//https://leetcode.com/problems/permutation-in-string/
//sliding window

var checkInclusion = function (s1, s2) {
  let freqMap = getStringMap(s1)
  let winLength = s1.length
  let left = 0
  let right = 0

  while (right < s2.length) {
    let rightChar = s2[right]
    let leftChar = s2[left]

    if (freqMap.get(rightChar)) {
      freqMap.set(rightChar, freqMap.get(rightChar) - 1)

      if (right - left + 1 === winLength) return true

      right++
    } else if (freqMap.has(leftChar)) {
      freqMap.set(leftChar, freqMap.get(leftChar) + 1)
      left++
    } else {
      left++
      right++
    }
  }

  return false
}

const getStringMap = (string) => {
  let map = new Map()

  for (const letter of string) {
    map.set(letter, (map.get(letter) || 0) + 1)
  }

  return map
}

/*

Name of peer: Marcel
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
