//https://leetcode.com/problems/degree-of-an-array/


const findShortestSubArray = nums => {

  let lengthMap = new Map()
  
  for (let i = 0; i < nums.length; i++) {
       
    !lengthMap.has(nums[i]) && lengthMap.set(nums[i], [])
    lengthMap.get(nums[i]).push(i)
    
  }
  
  let degree = 0
  let subLength = Infinity

  for (let val of lengthMap.values()) {
    
    if (val.length >= degree) {
      
      let start = val[0]
      let end = val[val.length - 1]
      let localLength = end - start + 1
      subLength = val.length > degree ? localLength : Math.min(subLength, localLength)
      degree = val.length
      
    }
    
  }

  return subLength
  
}
