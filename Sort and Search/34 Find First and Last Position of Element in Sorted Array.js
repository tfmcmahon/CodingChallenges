//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


//strategy: perform binary search on the left and right sides of the array, 
//moving each midpoint toward the left and right respectively until the pointers meet
const searchRange = (nums, target) => {
  
  //store the length of the array for convenience
  let n = nums.length
  
  //perform binary search on the left side, time = O(log(n))
  let low = (left, right) => {
    
    //while the left and right points converge, but are not equal ...
    while (left < right) {
      
      //define the mid (bias towards the left)
      let mid = Math.floor((left + right) / 2)
      
      //if the mid index is greater than the target, move the left pointer to mid + 1
      if (nums[mid] < target) left = mid + 1
      //otherwise set the right pointer to the mid
      else right = mid
    }
    
    //return the left point if we found a match, otherwise - 1
    return nums[left] === target ? left : -1
  }
  
  //perform binary search on the right side, time = O(log(n))
  let high = (left, right) => {
    
    while (left < right) {
      
      //bias towards the right
      let mid = Math.ceil((left + right) / 2)
      
      //if the mid value is less than or equal to the target, move the left pointer to the mid
      if (nums[mid] <= target) left = mid
      //otherwise move the right to the mid - 1
      else right = mid - 1
    }
    
    return nums[left] === target ? left : -1
  }
  
  //total time = O(2 * log(n)) = O(log(n))
  return [low(0, n - 1), high(0, n - 1)]
}