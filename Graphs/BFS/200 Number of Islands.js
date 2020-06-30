//https://leetcode.com/problems/number-of-islands/


const numIslands = grid => {
  
  //validate input
  if (!grid || !grid.length) return 0
  
  //store lengths for convenience
  let n = grid.length
  let m = grid[0].length
  
  //initialize island count, movement directions, grid boundary and terrain type validator
  let islands = 0
  let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  let validate = (x, y) => x >= 0 && y >= 0 && x < n && y < m && grid[x][y] === '1'
  
  //loop through the grid = O(n * m) time
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      
      //if we see land ...
      if (grid[i][j] === '1') {
        
        //flip it to water, and initialize a queue
        grid[i][j] = '0'        
        let queue = [[i, j]]
        
        //perform DFS
        while (queue.length) {
       
          let [x, y] = queue.shift()

          //create coordinates for each direction by adding to the current coordinates
          for (let [dx, dy] of dirs) {
            
            let row = x + dx
            let col = y + dy
            
            //validate the coordinates, if they are in-bounds and '1' ...
            if (validate(row, col)) {
              //... continue BFS, and flip the coordinates to a '0' to prevent overlap.
              queue.push([row, col])
              grid[row][col] = '0'
            }
          }
        }
        
        //afterwards, tally an island
        islands++
      }
    }
  }
  
  //total time = O(n * m)
  return islands
}