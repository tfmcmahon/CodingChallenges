//https://leetcode.com/problems/3sum/
//

const threeSum = nums => {
  
  if (nums.length < 3) return []
  
  nums.sort((a, b) => a - b)
  
  let result = []
  
  for (let i = 0; i < nums.length; i++) {
    let target = -nums[i]
    let left = i + 1
    let right = nums.length - 1
    
    while (left < right) {
      
      if (nums[left] + nums[right] === target) {
        
        result.push([nums[left], nums[i], nums[right]])
        
        while (nums[left + 1] === nums[left++]) {}
        while (nums[right - 1] === nums[right--]) {}
          
      } else if (nums[left] + nums[right] < target) left++
      else right--
    }
    while (nums[i + 1] === nums[i]) i++
  }
  
  return result
}