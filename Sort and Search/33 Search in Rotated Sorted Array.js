//https://leetcode.com/problems/search-in-rotated-sorted-array/
//binary search from a pivot


const search = (nums, target) => {
  
  let left = 0
  let right = nums.length - 1
  let pivot = 0
  
  //perform a binary search to find the pivot
  while (left <= right) {
    
    //set the pivot as the mid to start
    pivot = Math.floor((right - left) / 2) + left
    
    //if a left index is larger than an immediate right neighbor, we have found the pivot
    if (nums[pivot + 1] < nums[pivot]) break
    
    //if the mid is less than the left pointer, search again between left and mid
    if (nums[pivot] < nums[left]) right = pivot - 1
    //else if mid is bigger than left, search again between mid and right
    else left = pivot + 1
  }
  
  //perform a binary search on each side of the pivot
  let a = binarySearch(0, pivot, nums, target)
  let b = binarySearch(pivot + 1, nums.length, nums, target)
  
  //if the left search found the target, return it, else return the right search
  return a >= 0 ? a : b
}

const binarySearch = (left, right, nums, target) => {
  
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left
    
    if (nums[mid] == target) return mid
    
    if (nums[mid] < target) left = mid + 1
    else right = mid - 1
  }
  
  //return -1 if we cant find the target
  return nums[right] === target ? right : -1
}