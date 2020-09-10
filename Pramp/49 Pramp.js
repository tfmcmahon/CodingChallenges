//https://leetcode.com/problems/happy-number/
//hashes and sets

const isHappy = (n, seen = new Set()) => {
  if (n === 1) return true

  //if we sum to a number that is in the set, return false
  if (seen.has(n)) return false

  seen.add(n)

  //otherwise square each digit and add them together
  let nextSum = 0

  while (n) {
    let digit = n % 10
    n = Math.floor(n / 10)
    nextSum += Math.pow(digit, 2)
  }

  //recursively call the function
  return isHappy(nextSum, seen)
}

/*

Name of peer: Eli
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
