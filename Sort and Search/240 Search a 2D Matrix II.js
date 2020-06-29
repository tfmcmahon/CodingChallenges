//https://leetcode.com/problems/search-a-2d-matrix-ii/


const searchMatrix = (matrix, target) => {
   
  //validate input
  if (!matrix || !matrix.length || !matrix[0].length) return false
  
  //store dimensions and iterables
  let n = matrix.length
  let m = matrix[0].length
  let i = 0
  let j = m - 1
  
  //iterate through the matrix while we remain in bounds
  //worst case we will move n + m spaces
  while (i < n && j >= 0) {
    
    //store the current value
    let val = matrix[i][j]
    
    if (val === target) return true
    //if the current value is larger than the target, move back one column
    else if (val > target) j--
    //if current value is too small, move up a row
    else i++
    
  }
  
  //total time is O(n + m)
  return false
}