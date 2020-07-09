//https://leetcode.com/problems/max-consecutive-ones-iii/


//strategy: use a sliding window to calculate the longest subarray with up to K 0s.
//Move right, incrementing the 0 count if we see one at the right index.
//if we violate 0 count > K, move the left pointer until we no longer violate.
const longestOnes = (A, K) => {
    
  //define maxSubarray, 0 count, and the left pointer
  let maxSubarray = 0
  let zeroCount = 0
  let left = 0
  
  //iterate through the array with the right pointer, time = O(n)
  for (let right = 0; right < A.length; right++) {
    
    //if we see a 0, increment the 0 count
    if (!A[right]) zeroCount++
    
    //if we are in violation ... 
    while (zeroCount > K) {
      //... move the left pointer, decrement the 0 count if we see a 0
      if (!A[left++]) zeroCount--
    }
    
    //check if we have a new max subarray
    maxSubarray = Math.max(maxSubarray, right - left + 1)
  }
  
  //total time = O(n)
  //total space = O(1)
  return maxSubarray
}