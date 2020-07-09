//https://leetcode.com/problems/path-with-maximum-gold/


//strategy: perform DFS on every square that has gold.
//use recursion so that squares can be returned to their original value without using a visited set.
const getMaximumGold = grid => {
   
  //define maximum gold, directions, and a validator function
  let maxGold = 0
  let dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  //the validator checks that we are in bounds and that we are moving to a square with gold in it
  const validate = (x, y) => x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y]
  
  //DFS function
  const getGold = (x, y, sum) => {
    
    //if the square is valid ...
    if (validate(x, y)) {
      
      //store the new gold amount, set it to 0 to represent it as visisted, add the gold amount to our total
      let gold = grid[x][y]
      grid[x][y] = 0
      sum += gold
      
      //try to move in each direction, carry the sum 
      for (let [dx, dy] of dirs) getGold(x + dx, y + dy, sum)
      
      //calculate the max amount of gold we've seen
      maxGold = Math.max(sum, maxGold)
      //reset the square back to its previous value
      grid[x][y] = gold
      return
    }
    
  }
  
  //iterate through the grid, time = O(n * m)
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //if we see a square with gold in it, perform DFS
      if (grid[i][j]) getGold(i, j, 0)
    }
  }

  return maxGold
  
}