//https://leetcode.com/problems/3sum/
//sort argument array, search based on problem criteria


//strategy: sort the array in ascending order. Iterate through the sorted array ...
//... while looking for a 2-sum that equal i's inverted value.
//skip over duplicated values in order to only return unique triplets.
const threeSum = nums => {
  
  //input validation
  if (nums.length < 3) return []
  
  //sort the array, time = O(n * log(n))
  nums.sort((a, b) => a - b)
  
  //define a result variable
  let result = []
  
  //loop through the array = O(n)
  for (let i = 0; i < nums.length; i++) {

    //define a target sum, a left pointer, and a right pointer
    let target = -nums[i]
    let left = i + 1
    let right = nums.length - 1
    
    //search the array for the target, time = O(n ^ 2)
    while (left < right) {
      
      //if the sum of the left and right pointers' values equal the target ...
      if (nums[left] + nums[right] === target) {
        
        //... push the values to the result
        result.push([nums[left], nums[i], nums[right]])
        
        //increment/decrement the left/right pointers if we see duplicated values
        while (nums[left + 1] === nums[left++]) {}
        while (nums[right - 1] === nums[right--]) {}
      
        //if the sum is too low, increment the left pointer
      } else if (nums[left] + nums[right] < target) left++
      //and vice versa
      else right--
    }

    //if we get duplicated values at i, increment i
    while (nums[i + 1] === nums[i]) i++
  }
  
  //total time = O(n ^ 2 + n * (log(n)))
  return result
}