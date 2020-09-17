//https://www.hackerrank.com/challenges/special-palindrome-again/problem

function substrCount(n, s) {
  let specials = s.length
  let left

  for (let i = 0; i < s.length - 1; i++) {
    let j = i + 1
    left = 1

    while (s[j] === s[i] && j < s.length) {
      j++
      left++
      specials++
    }

    j++

    while (s[j] === s[i] && j < s.length) {
      j++
      left--
      if (!left) specials++
    }
  }

  return specials
}
