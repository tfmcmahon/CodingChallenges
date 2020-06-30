//https://leetcode.com/problems/longest-increasing-subsequence/
//DP + binary search


const lengthOfLIS = nums => {
  
  //validate inpuot
  if (!nums.length) return 0
  
  //initialize the longest subsequence,
  let memo = [nums[0]]
  
  //loop through the nums array = O(n)
  for (let i = 1; i < nums.length; i++) {
    
    //define the left pointer as 0 ...
    //... and the right pointer as the length of the longest seen subsequence ...
    //... which is stored as the memo array
    let left = 0
    let right = memo.length
    
    //perform bfs to determine where it's maximum length would be
    // time = O(log(n))
    while (left < right) {

      //define the mid pointer as halfway between left and right
      let mid = Math.floor((right + left) / 2)
      
      //if the value stored at the mid pointer of the LIS is less than the current index's value...
      //set the left pointer to the mid + 1
      if (memo[mid] < nums[i]) left = mid + 1
      //otherwise set it to the right 
      else right = mid
    }

    //store the index at which the current value's LIS would end
    memo[right] = nums[i]
  }
  
  //return the length of the longest subsequence we've seen
  return memo.length
}