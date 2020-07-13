//https://leetcode.com/problems/grid-illumination/
//grid row, col, diag representation in map


//strategy: store each lamp in a set, store all lamps' illumination in each of row, col, diag1, diag2 maps.
//loop through the query array, checking if the key is present in any of out maps
//then, remove the lamp from the set and darken all squares illuminated by the lamp
const gridIllumination = (N, lamps, queries) => {
    
  //define a result array, a lamp set, and a map for rows, columns, and both diagonals
  let lit = []
  let lampSet = new Set()
  let cols = new Map()
  let rows = new Map()
  let diag1 = new Map()
  let diag2 = new Map()
  
  //define directions and a validator helper to check if we're in bounds
  const dirs = [[1, 0], [-1, 0], [0, 0], [1, 1], [-1, 1], [0, 1], [1, -1], [-1, -1], [0, -1]]
  const validate = (x, y) => x >= 0 && y >= 0 && x < N && y < N
  
  //illuminator helper function, it takes x and y coordinates and a boolen that determines if we are turning lights on or off
  const illuminate = (x, y, on) => {
    
    //add or remove the lamp from the set
    on ? lampSet.add(`${x}${y}`) : lampSet.delete(`${x}${y}`)
    
    //add or subtract 1 to each corresponding row, col, and both diagonals
    rows.set(x, (rows.get(x) || 0) + (on ? 1 : -1))
    cols.set(y, (cols.get(y) || 0) + (on ? 1 : -1))
    diag1.set(x + y, (diag1.get(x + y) || 0) + (on ? 1 : -1))
    diag2.set(x - y, (diag2.get(x - y) || 0) + (on ? 1 : -1))
    
  }
  
  //illuminate all given lamp row, col, and diags
  for (let [lx, ly] of lamps) illuminate(lx, ly, true)

  //unit illumination checker
  const isLit = (x, y) => cols.get(y) > 0 || rows.get(x) > 0 || diag1.get(x + y) > 0 || diag2.get(x - y) > 0
  
  //iterate through the queries
  for (let [qx, qy] of queries) {
    
    //if the query is lit, push 1 to the result, if not, 0
    lit.push(isLit(qx, qy) ? 1 : 0)
    
    //loop through each direction
    for (let [dx, dy] of dirs) {
      
      let row = qx + dx
      let col = qy + dy
      
      //if we're in bounds and we have a lamp in the square
      if (validate(row, col) && lampSet.has(`${row}${col}`)) {
        
        //remove the lamp from the set and turn off all corresponding rows, cols, and diags
        illuminate(row, col, false)
        
      }
      
    }
    
  }
  
  return lit
  
}