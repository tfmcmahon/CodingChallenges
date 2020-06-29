//https://leetcode.com/problems/happy-number/


const isHappy = n => {

  let seen = new Set()

  const sumOfSquares = num => {
    const digits = []
    while (num > 0) {
      digits.push(num % 10)
      num = Math.floor(num / 10)
    }
    return digits.reduce((sum, num) => sum + num * num, 0)
  }  
    
  while (n !== 1 && !seen.has(n)) {
    seen.add(n)    
    n = sumOfSquares(n)    
  }
  
  return n === 1
}
