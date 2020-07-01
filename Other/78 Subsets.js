//https://leetcode.com/problems/subsets/
//back-tracking


const subsets = nums => {
    
  let result = [[]]
  
  //for each item in the nums array, create a copy of all previous subsets with the current number attached
  for (let i = 0; i < nums.length; i++) {
    result.forEach(sub => result.push([...sub, nums[i]]))
  }
  
  return result
}