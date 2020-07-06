//https://leetcode.com/problems/plus-one/

//strategy: look at the last index of the array, if it's below 9, add 1 and return
//if it's 9, continue to the next index. If we complete the entire loop, unshift 1 and return
const plusOne = nums => {
 
  //loop through the array, time = O(n)
  for (let i = nums.length - 1; i >= 0; i--) {
    
    //if we see a number 8 or below, add one and return
    if (nums[i] <= 8) {
      nums[i]++
      return nums
    //else, set the value to 0 and continue
    } else {
      nums[i] = 0
    }
  }
  
  //if we exit the loop, unshift a 1
  nums.unshift(1)

  //total time = O(n)
  //total space = O(1)
  return nums
}