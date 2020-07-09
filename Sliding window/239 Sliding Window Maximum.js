//https://leetcode.com/problems/sliding-window-maximum/
//Sliding window + monotonic queue (queue that removes all elements lower than an incoming node)

//strategy: use a monotonic queue to track the local maximum of the sliding window.
//a monotonic queue removes all items less than an incoming node by maintaining a descending order of nodes 
const maxSlidingWindow = (nums, k) => {
  
  //define a queue and a max values array, space = O(k)
  let queue = []
  let maxValues = []
  
  //iterate through the array, maintaining two pointers. 
  //start the right pointer at 0, and the left at 1 - k.
  for (let right = 0, left = 1 - k; right < nums.length; right++, left++) {
    
    //if there are nodes in the queue and the incoming node is larger than the last element, remove it
    //this will remove all smaller elements, since the queue will maintain a descending order
    while (queue.length && nums[right] > queue[queue.length - 1]) queue.pop()
    
    //add the right pointer's node to the queue
    queue.push(nums[right])
    
    //initialize the starting length by iterating until the left pointer is inbounds of the array
    if (left < 0) continue
    
    //push the back of the queue's value (this will be the max value since we maintain descending order)
    maxValues.push(queue[0])
    
    //if the left pointer matches the back of the queue, remove it (it will no longer be in the sliding window)
    if (nums[left] === queue[0]) queue.shift()
    
  }
  
  //total time = O(n)
  //total space = O(k)
  return maxValues
}