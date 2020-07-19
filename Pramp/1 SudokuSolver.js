//pramp interview question
//https://www.pramp.com/challenge/O5PGrqGEyKtq9wpgw6XP


const sudokuSolve = board => {

  let row, col
  let candidates = null
  
  for (let i = 0; i < 9; i++) {
    
    for (let j = 0; j < 9; j++) {
      
      if (board[i][j] === '.') {
        
        let newCandidates = getCandidates(i, j, board)
        
        if (candidates === null || newCandidates.length < candidates.lengh) {
          
          row = i
          col = j
          candidates = newCandidates
          
        }
        
      }
      
    }
    
  }
  
  if (candidates === null) return true
  
  for (let candidate of candidates) {
    
    board[row][col] = candidate
    if (sudokuSolve(board)) return true
    board[row][col] = '.'
    
  }

  return false
  
}

const getCandidates = (i, j, board) => {
  
  let chars = ['1','2','3','4','5','6','7','8','9']
  let newCandidates = []
  
  for (let char of chars) {
    
    let collision = false
    
    for (let k = 0; k < 9; k++) {
      
      let row = (i - i % 3) + (k % 3)
      let col = (j - j % 3) + ~~(k / 3)
      
      if (board[i][k] === char || board[k][j] === char || board[row][col] === char) {
        
          collision = true
          break
        
      }
      
    }
    
    if (!collision) newCandidates.push(char)
    
  }
  
  return newCandidates
  
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

output: true

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

output: false
*/