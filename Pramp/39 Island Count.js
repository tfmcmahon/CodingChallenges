//https://www.pramp.com/challenge/yZm60L6d5juM7K38KYZ6
//Graph DFS (count islands)

function getNumberOfIslands(binaryMatrix) {
  let numberOfIslands = 0

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  const validate = (row, col) =>
    row >= 0 &&
    col >= 0 &&
    row < binaryMatrix.length &&
    col < binaryMatrix[0].length

  const getIslands = (i, j) => {
    binaryMatrix[i][j] = 0

    for (const [di, dj] of dirs) {
      let nextI = i + di
      let nextJ = j + dj

      if (validate(nextI, nextJ) && binaryMatrix[nextI][nextJ] === 1) {
        getIslands(nextI, nextJ)
      }
    }
  }

  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        getIslands(i, j)
        numberOfIslands++
      }
    }
  }

  return numberOfIslands
}

/*

Name of peer: Andrew
CS background: recent grad

What can I improve?: small typo in i > j loop
What did my peer think I can improve?: 

What did I do well?: identified problem type, explained everything, talked about the trade-offs between recursion and iteration, coded cleanly
What did peer think I did well?: 

*/
