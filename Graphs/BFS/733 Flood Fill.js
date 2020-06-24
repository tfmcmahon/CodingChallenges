//https://leetcode.com/problems/flood-fill/
//BFS / island variant

const floodFill = (image, sr, sc, newColor) => {
  
  //get the color that we're replacing, check if it matches what we want to replace it with ...
  //if it is, no work needs to be done (important edge case)
  const toFill = image[sr][sc]
  if (toFill === newColor) return image
  
  //initialize the a queue with the starting coordinates
  let queue = [[sr, sc]] 

  //set up search directions and a validator which checks that we are in the image bounds and the color mataches the start color
  const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  const validate = (x, y) => x >= 0 && y >= 0 && x < image.length && y < image[0].length && image[x][y] === toFill
  
  //perform BFS
  while (queue.length) {
    let [x, y] = queue.shift()
    
    image[x][y] = newColor
    
      for (let [dx, dy] of dirs) {
        let row = x + dx
        let col = y + dy

        if (validate(row, col)) queue.push([row, col])
      }
  }
  
  //return the updated image
  return image
}