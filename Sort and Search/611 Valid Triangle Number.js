//https://leetcode.com/problems/valid-triangle-number/


//strategy: iterate through the array with 3 pointers.
//ith pointer starts at the end of the array and moves to the left ...
//... it sums two additional points to check for sum gt its value
const triangleNumber = nums => {
  
  //sort the array, time = O(n * log(n))
  nums.sort((a, b) => a - b)
  
  //define a result variable
  let triangleNumbers = 0
  
  //loop through the array, right to left, time = O(n)
  for (let i = nums.length - 1; i > 1; i--) {
    
    //define left and right pointers, and a target 
    let left = 0
    let right = i - 1
    
    //iterate the left and right pointer, looking for a sum that's greater than nums[i]
    //time = O(n)
    while (left < right) {
              
      //if we find a pair ...
      if (nums[left] + nums[right] > nums[i]) {
        
        //... add the distance between right and left pointer to the total. ...
        //... we can do this since we know every value between the two indeces is gt nums[i] ...
        //... since we are working on a sorted array.
        triangleNumbers += right - left
        //decrement right pointer to check for another pair
        right--
         
        //otherwise, increment the left pointer
      } else left++

    }
          
  }
  
  //total time = O(n * log(n) + n ^ 2) = O(n ^ 2)
  return triangleNumbers
  
}