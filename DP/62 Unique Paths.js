//https://leetcode.com/problems/unique-paths/
//DP with 2D memo table

const uniquePaths = (m, n) => {
  
  //initialize 2D memo array = O(m * n) space. We can fill with 1 since we will only be ...
  //... overwriting the table and not continuously summing the indeces
  let memo = [...Array(m)].map(() => Array(n).fill(1))
  
  //loop through the matrix = O(m * n)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //the sum of moves in any given [i][j] is the sum of the previous row at the same column
      //and the previous column at the same row
      memo[i][j] = memo[i - 1][j] + memo[i][j - 1]
    }
  }
  
  //O(m * n) time complexity and O(m * n) space
  return memo[m - 1][n - 1]
}