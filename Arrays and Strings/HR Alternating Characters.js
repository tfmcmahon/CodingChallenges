//https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
  let deletions = 0

  let left = 0
  let right = 1

  while (right < s.length) {
    if (s[right] === s[left]) {
      deletions++
    } else {
      left = right
    }

    right++
  }

  return deletions
}
