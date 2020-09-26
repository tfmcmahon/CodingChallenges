//https://www.hackerrank.com/challenges/special-palindrome-again/problem

function substrCount(n, s) {
  let specials = n
  let left

  for (let i = 0; i < n - 1; i++) {
    let j = i + 1
    left = 1

    while (s[j] === s[i] && j < n) {
      j++
      left++
      specials++
    }

    j++

    while (s[j] === s[i] && j < n) {
      j++
      left--
      if (!left) specials++
    }
  }

  return specials
}
