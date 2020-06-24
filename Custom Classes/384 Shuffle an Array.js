//https://leetcode.com/problems/shuffle-an-array/
//randomize array indeces

class Solution {
  constructor(nums) {
    this.data = nums
    this.n = nums.length
  }
  
  reset() {
    return this.data
  }
  
  swap(result, i, j) {
    let temp = result[i]
    result[i] = result[j]
    result[j] = temp
    return result
  }
  
  shuffle() {
    //create a copy of the data to work on and return
    let result = this.data.map(num => num)
    
    for (let i = this.n - 1; i > 0; i--) {
      //find a random index
      let j = Math.floor(Math.random() * (i + 1))
      //replace it with the current index
      result = this.swap(result, i, j)
    }
    
    return result
  }
  
}