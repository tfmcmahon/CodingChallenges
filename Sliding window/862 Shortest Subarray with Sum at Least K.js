//https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
//deque + memo array

//strategy: store the running sum of the array in a memo array.
//use a deque 
const shortestSubarray = (A, K) => {
  
  //define the array length, the shortest subarray length, and a memo array to store the running sum of the array at each index
  //time + space = O(n)
  let n = A.length
  let shortest = n + 1
  let memo = Array(n + 1).fill(0)
  
  //iterate through the array, calculating the running sum at each index, time = O(n)
  for (let i = 0; i < n; i++) {
    memo[i + 1] = memo[i] + A[i]
  }
  
  //define a double ended queue
  let deque = []
  
  //iterate through all possible min subarray lengths = O(n)
  for (let i = 0; i <= n; i++) {
    
    //if we have items in the deque and the running sum at the current length minus the front of the deque's index sum is at least K
    while (deque.length && memo[i] - memo[deque[0]] >= K) {
      
      //check for a new minimum and remove the value from the deque
      shortest = Math.min(shortest, i - deque[0])
      deque.shift()
      
    }
    
    //if we have items in the deque and the running sum at the current length is lte the back of the deque's index sum
    while (deque.length && memo[i] <= memo[deque[deque.length - 1]]) {

      //remove the value from the deque
      deque.pop()
    }
    
    //add the length to the deque
    deque.push(i)
    
  }
  
  //if our shortest subarray length is larger than the array length, we we unable to reach the sum, return -1
  //total time and space = O(n)
  return shortest <= n ? shortest : -1
}
