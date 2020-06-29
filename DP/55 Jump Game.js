//https://leetcode.com/problems/jump-game/
//DP - single loop

const canJump = nums => {
  
  //initialize our total jumps remaining
  let jumps = nums[0]
  
  //loop through the nums array = O(n)
  for (let i = 1; i < nums.length; i++) {
    
    //if we run out of jumps, fail
    if (!jumps) return false
    //subtract a jump each time we move forward
    jumps--
    //take the maximum between our remaining jumps and what we see at the current index
    jumps = Math.max(jumps, nums[i])
  }
  
  //total time = O(n)
  return true
}