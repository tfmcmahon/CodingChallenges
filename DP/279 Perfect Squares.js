//https://leetcode.com/problems/perfect-squares/


const numSquares = n => {

  //initialize memo 1D memo table = O(n) time and space
  //start with infinity since we will be looking for a min
  //memo[0] = 0 since there are no perfect squares that can be summed to get 0
  let memo = Array(n + 1).fill(Infinity)
  memo[0] = 0
  
  //iterate through the memo table
  for (let i = 1; i <= n; i++) {
    //inner loop checks for all squares up to i = O(n^2)
    for (let j = 1; j * j <= i; j++) {
      //the manimum number of squares summing to i is the min between what has been recorded ...
      //... and i - j^2 + 1
      memo[i] = Math.min(memo[i], memo[i - j * j] + 1)
    }
  }
  
  //O(n) + O(n^2)
  //total time complexity = O(n^2) since we drop lower order terms
  //space = O(n)
  return memo[n]
}