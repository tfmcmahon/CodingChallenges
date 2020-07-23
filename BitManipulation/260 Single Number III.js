//https://leetcode.com/problems/single-number-iii/


//extra space
const singleNumber = nums => {
  
  let set = new Set()
  
  for (let num of nums) set.has(num) ? set.delete(num) : set.add(num)

  return [...set]
  
}

//O(1) space
const singleNumber = nums => {
  
  let difference = 0
  
  for (let num of nums) difference ^= num
  
  difference &= -difference
  
  let a = 0, b = 0
  
  for (let num of nums) !(num & difference) ? a ^= num : b ^= num
  
  return [a, b]
  
}