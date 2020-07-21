//https://leetcode.com/problems/word-search/


const exist = (board, word) => {
  
  const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  const validate = (x, y) => x >= 0 && y >= 0 && x < board.length && y < board[0].length
  
  const dfs = (i, j, k) => {
    
    if (board[i][j] !== word[k]) return false
    if (k === word.length - 1) return true
    
    let temp = board[i][j]
    board[i][j] = '#'
    
    for (let [di, dj] of dirs) {

      let x = i + di
      let y = j + dj

      if (validate(x, y) && dfs(x, y, k + 1)) return true

    }
    
    board[i][j] = temp
    return false

  }
  
  for (let i = 0; i < board.length; i++) {
    
    for (let j = 0; j < board[0].length; j++) {

      if (dfs(i, j, 0)) return true
      
    }
    
  }
  
  return false
  
}