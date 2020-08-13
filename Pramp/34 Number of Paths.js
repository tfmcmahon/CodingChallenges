//https://www.pramp.com/challenge/N5LYMbYzyOtbpovQoY7X
//DP

function numOfPathsToDest(n) {
  let memo = [...Array(n + 1)].map(() => Array(n).fill(0))

  memo[n - 1][0] = 1

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (j >= Math.abs(i - n + 1)) {
        memo[i][j] = memo[i + 1][j] + memo[i][j - 1]
      }
    }
  }

  return memo[0][n - 1]
}
/*

Name of peer: Nam 
CS background: 1st year SWE

What can I improve?: I didn't work out the conditional until the very end, I'm not sure how big of an error this is, if at all.
What did my peer think I can improve?: You should try to come up with the solution before coding.

What did I do well?: Clean code, problem type recognition. Almost tried for DFS but did DP.
What did peer think I did well?: You did well on solving the problem with optimal solution.

*/
