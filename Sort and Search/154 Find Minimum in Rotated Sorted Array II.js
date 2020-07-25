//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/


//binary search
const findMin = nums => {
  
  let left = 0
  let right = nums.length - 1
  
  while (left < right) {
    
    while (left < right && nums[left] === nums[right]) left++
    
    let mid = Math.floor((right + left) / 2)
    
    if (nums[mid] > nums[right]) left = mid + 1
    else right = mid
    
  }
  
  return nums[left]
  
}

//O(n)
const findMin = nums => {
    
  return Math.min(...nums)
  
}