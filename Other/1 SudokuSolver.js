//pramp interview question
//https://www.pramp.com/challenge/O5PGrqGEyKtq9wpgw6XP


const getCandidates = (board, row, col) => {
  
  let candidates = []
  let characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  for (let char of characters) {
    
    let collision = false
    
    for (let i = 0; i < 9; i++) {
      
      if (board[row][i] === char || 
          board[i][col] === char ||
          board[(row - row % 3) + Math.floor(i / 3)][(col - col % 3) + i % 3] === char
         ) {
        collision = true
        break
      }
     
    }
    
    if (!collision) candidates.push(char)
  }
  
  return candidates
  
}


const sudokuSolve = board => {

  let x = -1
  let y = -1
  let candidates = null
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      
      if (board[row][col] === '.') {
        let newCandidates = getCandidates(board, row, col)
        
        if (candidates === null || newCandidates.length < candidates.length) {
          
          candidates = newCandidates
          x = row
          y = col
          
        }
        
      }
      
    }
    
  }
  
  if (candidates === null) return true
  
  for (let candidate of candidates) {
    
    board[x][y] = candidate
    if (sudokuSolve(board)) return true
    board[x][y] = '.'
    
  }
  
  return false
  
}


/*
Input samples:

[
  [".",".",".","7",".",".","3",".","1"],
  ["3",".",".","9",".",".",".",".","."],
  [".","4",".","3","1",".","2",".","."],
  [".","6",".","4",".",".","5",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".","1",".",".","8",".","4","."],
  [".",".","6",".","2","1",".","5","."],
  [".",".",".",".",".","9",".",".","8"],
  ["8",".","5",".",".","4",".",".","."]
]

[
  [".","2","3","4","5","6","7","8","9"],
  ["1",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
]

*/