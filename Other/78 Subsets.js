//https://leetcode.com/problems/subsets/
//back-tracking


//strategy: create an result array with an empty array in it. Loop through the nums array,
//performing something like level order traversal on the result array;
//make a new copy of each result item and add nums[i] to it.
const subsets = nums => {
 
  //define the result array
  let subsetsArr = [[]]

  //loop through nums array
  for (let i = 0; i < nums.length; i++) {

    //set a level stopper to prevent infine loop
    let j = subsetsArr.length
    
    //for every result item, push the current nums index value to it
    while (j--) subsetsArr.push([...subsetsArr[j], nums[i]])

  }
  
  //total time = O(2 ^ n)
  return subsetsArr
}