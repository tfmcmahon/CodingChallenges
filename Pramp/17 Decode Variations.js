//https://www.pramp.com/challenge/r1Kw0vwG6OhK9AEGAy6L
//https://leetcode.com/problems/decode-ways/

const decodeVariations = S => {
  
  let memo = Array(S.length + 1).fill(0)
  memo[0] = 1
  memo[1] = 1
  
  for (let i = 2; i <= S.length; i++) {
   
    let current = Number(S.substring(i - 1, i))
    if (current >= 1 && current <= 9) memo[i] += memo[i - 1]
    
    let prev = Number(S.substring(i - 2, i))
    if (prev >= 10 && prev <= 26) memo[i] += memo[i - 2]
    
  }

  return memo[memo.length - 1]
  
}


/*

Name of peer: yanhong
CS background: graduate grad

What can I improve?: Identifying string based DP problems
What did my peer think I can improve?: 

What did I do well?: I passed over the solution in my head, but didn't quite get there. Wasn't helped by interviewer having slightly different answer
What did peer think I did well?: 

*/