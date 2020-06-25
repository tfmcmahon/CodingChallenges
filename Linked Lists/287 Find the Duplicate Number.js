//https://leetcode.com/problems/find-the-duplicate-number/
//Linked list / Floyd's Cycle Finding Algorithm

const findDuplicate = nums => {
    
  let slow = nums[0]
  let fast = nums[nums[0]]
  
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  
  slow = 0
  
  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  
  return slow
}