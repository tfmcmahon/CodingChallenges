//https://leetcode.com/problems/subarrays-with-k-different-integers/


//strategy: loop through the array, maintain a left and right pointer ...
//... each with a map which stores and updates a tally of seen digits.
//if the right map is gte K, increment the right pointer until it is less than K
//if the left map is gt K, increment the left pointer until it is lte K
//tally the difference between the right and left pointers.
const subarraysWithKDistinct = (A, K) => {

  //define a result variable, left and right pointers, left and right maps = O(2 * n) space
  let goodSubarrays = 0
  let left = 0, right = 0
  let leftMap = new Map(), rightMap = new Map()

  //loop through the array = O(n)
  for (let i = 0; i < A.length; i++) {

    //initialize a key for the current index if it doesn't exist
    !leftMap.has(A[i]) && leftMap.set(A[i], 0)
    !rightMap.has(A[i]) && rightMap.set(A[i], 0)
    //increment the key value
    leftMap.set(A[i], leftMap.get(A[i]) + 1)
    rightMap.set(A[i], rightMap.get(A[i]) + 1)   

    //if the left map size is greater than K ...
    while (leftMap.size > K) {

      //decrement the left pointer's key value by one
      leftMap.set(A[left], leftMap.get(A[left]) - 1)
      //if the key value is 0, delete the key (since we are checking the map size we need to delete the key)
      if (leftMap.get(A[left]) === 0) leftMap.delete(A[left])
      //increment the left pointer
      left++

    }
    
    //if the right map size is greater than or equal to K repeat the above steps
    while (rightMap.size >= K) {

      rightMap.set(A[right], rightMap.get(A[right]) - 1)
      if (rightMap.get(A[right]) === 0) rightMap.delete(A[right])
      right++

    }
 
    //add right - left to the subarray total
    goodSubarrays += right - left

  }

  //total time and space = O(n)
  return goodSubarrays
  
}