//https://www.pramp.com/challenge/ml9AwEA42YHK735G3lq5



const spiralCopy = (inputMatrix) => {
  
  let result = []

  let startRow = 0
  let startCol = 0
  let endRow = inputMatrix.length - 1
  let endCol = inputMatrix[0].length - 1

  const right = (start, end, position) => {

    for (let i = start; i <= end; i++) {

      result.push(inputMatrix[position][i])

    }

    startRow++

  }

  const down = (start, end, position) => {

    for (let i = start; i <= end; i++) {

      result.push(inputMatrix[i][position])

    }

    endCol--

  }

  const left = (start, end, position) => {

    for (let i = end; i >= start; i--) {

      result.push(inputMatrix[position][i])

    }

    endRow--

  }

  const up = (start, end, position) => {

    for (let i = end; i >= start; i--) {

      result.push(inputMatrix[i][position])

    }

    startCol++

  }


  while (startRow <= endRow && startCol <= endCol) {

    right(startCol, endCol, startRow)
    
    down(startRow, endRow, endCol)
    
    startRow <= endRow && left(startCol, endCol,endRow)

    startCol <= endCol && up(startRow, endRow, startCol)

  }
  
  return result
  
}

/*

Name of peer: Andrew
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/