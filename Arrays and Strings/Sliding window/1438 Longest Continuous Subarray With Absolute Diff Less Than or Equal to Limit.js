//https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/


//strategy: use a sliding window while maintaining max and min queues to keep track of the ...
//... local max and min elements
const longestSubarray = (nums, limit) => {
  
  //define max and min queues with corresponding front and back pointers
  //the back updates each queue with the current value, the front points to the local min/max values
  //space = O(n)
  let maxQueue = [], minQueue = []
  let maxBack = -1, minBack = -1, left = -1
  let maxFront = 0, minFront = 0
  //store the longest subarray length
  let longest = 0
  
  //iterate through the array O(n)
  for (let right = 0; right < nums.length; right++) {
    
    //store our current index value
    let val = nums[right]
    
    //if the back pointer is further back than the front pointer and we see a value that is larger/smaller ...
    //... than our current back, move the back point toward the front
    while (maxBack >= maxFront && val > maxQueue[maxBack]) maxBack--
    while (minBack >= minFront && val < minQueue[minBack]) minBack--
    
    //increment the back pointers and insert the value into each queue
    maxQueue[++maxBack] = val
    minQueue[++minBack] = val
    
    //if the front of the max and min queue satisfy the limit condition ...
    if (maxQueue[maxFront] - minQueue[minFront] <= limit) {
      
      //check and update the longest subarray we've seen
      longest = Math.max(longest, right - left)
      
    } else {
      //if not; until we meet the limit...
      while (maxQueue[maxFront] - minQueue[minFront] > limit) {
        //... move the left pointer up ...
        ++left
        //... if we bump into the max or min front pointer, move it to be in sync with the left pointer
        maxQueue[maxFront] === nums[left] && maxFront++
        minQueue[minFront] === nums[left] && minFront++
      }
    }
  }
  
  //total time and space = O(n)
  return longest
}