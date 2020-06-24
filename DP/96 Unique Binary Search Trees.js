//https://leetcode.com/problems/unique-binary-search-trees/
//catalan number

const numTrees = n => {
    
  //create a memo table and initialize the 0th and 1st values to 1
  let memo = Array(n + 1).fill(0)
  memo[0] = 1
  memo[1] = 1
  
  //outter loop from 2 to n
  for (let i = 2; i <= n; i++) {
    //inner loop from 0 to i
    for (let j = 0; j < i; j++) {
      //ith value plus equal inner * outter - inner - 1
      memo[i] += memo[j] * memo[i - j - 1]
    }
  }
  
  return memo[n]
}