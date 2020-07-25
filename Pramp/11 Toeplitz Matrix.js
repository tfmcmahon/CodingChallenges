//https://www.pramp.com/challenge/0QmxM9x81lTKO47p43Jr
//matrix traversal and validation


const isToeplitz = arr => {
	
  let maxLength = arr.length > arr[0].length ? arr.length : arr[0].length

  const validator = (x, y) => x < arr.length && y < arr[0].length
  
  const helper = (target, row, col) => {
  
    for (let i = 1; i < maxLength; i++) {
    
      let x = row + i
      let y = col + i
    
      if (validator(x, y) && arr[x][y] !== target) return false
    
    }
  
    return true
  
  }
  
  for (let i = 0; i < maxLength; i++) {

    if (validator(0, i) && !helper(arr[0][i], 0, i)) return false
        
    if (validator(i, 0) && !helper(arr[i][0], i, 0)) return false
    
  }
  
  return true
  
}

const test = [[6,4,4]]

/*

Name of peer: Marcel
CS background: 5 year SWE

What can I improve?: small syntax error in the validator call. reduce validator calls.
What did my peer think I can improve?: none

What did I do well?: clean code, clear thought process
What did peer think I did well?: explained myself well.

*/