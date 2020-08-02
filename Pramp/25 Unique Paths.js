//dfs

const getUniquePaths = (grid) => {

  let numPaths = 0

  let height = grid.length
  let width = grid[0].length

  const validate = (x, y) => x >= 0 && y >= 0 && x < height && y < width
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  const getPath = (board, i, j) => {

    if (i === height - 1 && j === width - 1) {

      return numPaths++

    }

    for (let [di, dj] of dirs) {

      let row = i + di
      let col = j + dj

      if (validate(row, col) && board[row][col] === 0) {

        board[i][j] = 1
        getPath(board, row, col)
        board[i][j] = 0

      }

    }

  }

  getPath(grid, 0, 0)

  return numPaths

}


/*

Name of peer: Tamas
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/