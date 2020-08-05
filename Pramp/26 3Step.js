

const step3 = n => {

  let memo = Array(n + 1).fill(0)
  memo[0] = 1
  memo[1] = 1
  memo[2] = 2

  for (let i = 3; i <= n; i++) {

    memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1]

  }

  return memo[n]

}

/*

Name of peer: Andrew
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/