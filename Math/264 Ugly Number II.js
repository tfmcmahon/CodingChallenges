//https://leetcode.com/problems/ugly-number-ii/
//DP math hybrid

//strategy: generate all ugly numbers by multiplying each previous ugly number by 2, 3, and 5
//maintain order by taking the min of each result ...
//... only increase the index of the min
const nthUglyNumber = n => {
  
  //define a memo arryay and a 2, 3, and 5 multiplication pointer
  let memo = [1]
  let i2 = 0
  let i3 = 0
  let i5 = 0
  
  //generate ugly numbers until we reach n
  while (memo.length < n) {
    
    //generate candidates bu multiplying values at each index pointer by each of 2, 3, and 5
    let m2 = memo[i2] * 2
    let m3 = memo[i3] * 3
    let m5 = memo[i5] * 5
    
    //calculate the minimum
    let next = Math.min(m2, m3, m5)
    
    //move each pointer that matches the minimum up (there may be multiple)
    if (next === m2) i2++
    if (next === m3) i3++
    if (next === m5) i5++
    
    //add the result to the ugly numbers array
    memo.push(next)
  }
  
  //return the nth number
  //time and space = O(n)
  return memo[n - 1]
}