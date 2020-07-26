//https://www.pramp.com/challenge/61ojWAjLJbhob2nP2q1O
//DP


const deletionDistance = (str1, str2) => {
 
  let n = str1.length
  let m = str2.length
  
  let memo = [...Array(n + 1)].map(() => Array(m + 1).fill(0))
  
  for (let i = 0; i <= n; i++) {
    
    for (let j = 0; j <= m; j++) {
      
      if (!i) memo[i][j] = j
      else if (!j) memo[i][j] = i
      else if (str1[i - 1] === str2[j - 1]) memo[i][j] = memo[i - 1][j - 1]
      else memo[i][j] = 1 + Math.min(memo[i - 1][j], memo[i][j - 1])
      
    }
    
  }

  return memo[n][m]
  
}


/*

Name of peer: Divyansh
CS background: 1st year SWE

What can I improve?: Identify the problem type more quickly.
What did my peer think I can improve?: Work on DP problems.

What did I do well?: Laid out thought process well.
What did peer think I did well?: 

*/