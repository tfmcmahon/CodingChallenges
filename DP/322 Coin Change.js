//https://leetcode.com/problems/coin-change/


//strategy: Use a memo array to keep track of minimum coins needed to make a given amount, up to the amount argument.
//the memo value will be equal to the minimum of (amount value - coin value) for each coin ...
//... we look back into the memo table to see the minimum amount of coins it took to get to the value ...
//... minus each coin option, giving us every new combination to get to a given value
const coinChange = (coins, amount) => {

  //define memo array and set everything to infinity since we will be taking the min. space = O(n)
  let memo = Array(amount + 1).fill(Infinity)
  //set the 0th value to 0, since we use 0 coins to make 0 amount
  memo[0] = 0
  
  //loop through the memo (amount) array, time = O(n)
  for (let i = 1; i < memo.length; i++) {
    //loop through each coin, total time = O(m)
    for (let j = 0; j < coins.length; j++) {
      
      //if our coin is less than the current amount ...
      if (coins[j] <= i) {
       
        //its value is equal to the minimum of its current value and the value at the amount - coin value, incremented by one ...
        //... which represents adding one more coin
        memo[i] = Math.min(memo[i], memo[i - coins[j]] + 1)
        
      }
    }
  }

  //if the amount value is infinity, we couldn't reach it, return -1. else return the calculated min number of coins for the amount
  //total time = O(n * m)
  //total space = O(n)
  return memo[amount] === Infinity ? -1 : memo[amount]
  
}
