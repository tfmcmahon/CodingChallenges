//https://leetcode.com/problems/gas-station/


var canCompleteCircuit = function(gas, cost) {
   
  for (let i = 0; i < gas.length; i++) { //start and end index
    
    let currentGas = 0
    let j = i
    
    while (true) {
      
      currentGas += gas[j]
      currentGas -= cost[j]

      if (currentGas < 0) break
      
      j++
      
      if (j === gas.length) j = 0
      if (j === i) return i

    }

  }
  
  return -1
  
}

/*

Name of peer: Eli
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/

//leetcode 994 - rotting oranges
/*
const orangesRotting = grid => {
    
  if (grid.length === 1 && grid[0].length === 1 && !grid[0][0]) return 0
  
  let time = -1
  let count = 0
  let queue = []
  
  for (let i = 0; i < grid.length; i++) {
    
      for (let j = 0; j < grid[0].length; j++) {
        
          if (grid[i][j] > 1) {
            
              queue.push([i, j])
            
          } else if (grid[i][j] === 1) {
            
              count++
            
          }
        
      }
    
  }
  
  const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  
  const validate = (x, y) => x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] === 1
  
  while (queue.length > 0) {
    
      let size = queue.length
      
      while (size-- > 0) {
        
          let [x, y] = queue.shift()
          
          for (let [dx, dy] of dirs) {
            
              let row = x + dx
              let col = y + dy
              
              if (validate(row, col)) {
                
                  grid[row][col] = 2
                  queue.push([row, col])
                  count--
                
              }
            
          }
        
      }
    
      time++
    
  }

  return count ? -1 : time

}
*/