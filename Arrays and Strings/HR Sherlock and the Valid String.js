//https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(s) {
  let freqMap = getFreqMap(s)
  let valid = true
  let charSet = new Map()

  for (let val of freqMap.values())
    charSet.set(val, (charSet.get(val) || 0) + 1)
  if (charSet.size > 2) valid = false
  else {
    let oneVal = false
    let violation = false
    let firstKey

    for (let [key, val] of charSet.entries()) {
      if (val > 1 && !oneVal) {
        oneVal = true
      } else if (val > 1) {
        violation = true
      }

      if (firstKey) {
        if (
          firstKey - 1 !== key &&
          firstKey + 1 !== key &&
          (key !== 1 || val !== 1)
        )
          violation = true
      } else {
        firstKey = key
      }
    }

    valid = violation ? false : valid
  }

  return valid ? 'YES' : 'NO'
}

const getFreqMap = (s) => {
  let map = new Map()

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  return map
}
