//https://leetcode.com/problems/trapping-rain-water/



const trap = function(height) {
  
  let size = height.length
  let leftMax = Array(size)
  let rightMax = Array(size)
  let totalWater = 0
  
  leftMax[0] = height[0]
  rightMax[size - 1] = height[size - 1]
  
  for (let i = 1; i < size; i++) {
    
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
    
  }
  
  for (let i = size - 2; i >= 0; i--) {
    
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
    
  }
  
  for (let i = 1; i < size - 1; i++) {
    
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i]
    
  }
  
  return totalWater
  
}

/*

Name of peer: Tamas
CS background: 

What can I improve?: Misidentified problem type
What did my peer think I can improve?: Thought I over-complicated things

What did I do well?: 
What did peer think I did well?: 

*/