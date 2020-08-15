//https://www.pramp.com/challenge/wqNo9joKG6IJm67B6z34
//sliding window

function getShortestUniqueSubstring(arr, str) {
  // your code goes here

  let left = 0
  let windowMap = new Map()
  let minString = ''
  let minLength = Infinity

  //O(n * m)
  for (let right = 0; right < str.length; right++) {
    windowMap.set(str[right], (windowMap.get(str[right]) || 0) + 1)

    while (checkContains(arr, windowMap)) {
      let length = right - left + 1

      if (length < minLength) {
        minLength = length
        minString = str.substring(left, right + 1)
      }

      windowMap.set(str[left], (windowMap.get(str[left]) || 0) - 1)
      left++
    }
  }

  return minString
}

const checkContains = (arr, windowMap) => {
  for (let letter of arr) {
    if (!windowMap.has(letter) || windowMap.get(letter) === 0) return false
  }

  return true
}

/*

Name of peer: Nestor
CS background: PHD grad

What can I improve?: Get to linear solution
What did my peer think I can improve?: NA

What did I do well?: Clean code, solved a 'hard' problem, though unoptimal
What did peer think I did well?: NA

*/
