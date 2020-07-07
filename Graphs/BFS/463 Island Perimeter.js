//https://leetcode.com/problems/island-perimeter/


//strategy: iterate through the grid; when we find our first island, perform bfs.
//add 4 to the total perimeter, then subtract 1 for each land tile surrounding it
const islandPerimeter = grid => {

  //define a perimeter and a queue
  let perimeter = 0
  let queue = []
  
  //iterate through the grid, time = O(n)
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      
      //stop when we see a land tile
      if (grid[i][j]) {
        
        //mark it as # to represend a visited tile and add it to the queue, stop the grid iteration
        grid[i][j] = '#'
        queue.push([i, j])
        break
        
      }
      
    }
    
  }
  
  //define deirections
  let dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  
  //validation function, check if we are in bounds and seeing land, time = O(1)
  const validate = (x, y) => {
    
    if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y]) {
      
      //if we see land, decrement the perimeter, continue BFS if we see a 1 (not a #)
      perimeter--
      return grid[x][y] === 1
      
    }
    
  }
  
  //perform BFS, time = O(n)
  while (queue.length) {
    
    //remove the first node from the queue, add 4 to the perimeter
    let [x, y] = queue.shift()
    perimeter += 4
    
    //look in every direction
    for (let [dx, dy] of dirs) {
    
      let row = x + dx
      let col = y + dy
      
      //validate the new coordinates
      if (validate(row, col)) {
        
        //mark the grid space a visited and continue bfs
        grid[row][col] = '#'
        queue.push([row, col])
        
      }
      
    }
    
  }
  
  //total time and space = O(n)
  return perimeter
}