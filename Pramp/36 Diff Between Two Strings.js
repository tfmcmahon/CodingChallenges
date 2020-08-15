//https://www.pramp.com/challenge/5j2xWAx1qPtlZGLnG2O0
//DP

function diffBetweenTwoStrings(source, target) {
  let memo = [...Array(source.length + 1)].map(() =>
    Array(target.length + 1).fill(0)
  )

  //fill right most column with increaseing length
  for (let i = 0; i < source.length; i++) {
    memo[i][target.length] = source.length - i
  }

  //fill bottom most row with increasing length
  for (let j = 0; j < target.length; j++) {
    memo[source.length][j] = target.length - j
  }

  for (let i = source.length - 1; i >= 0; i--) {
    for (let j = target.length - 1; j >= 0; j--) {
      if (source[i] === target[j]) memo[i][j] = memo[i + 1][j + 1]
      else memo[i][j] = Math.min(memo[i + 1][j], memo[i][j + 1]) + 1
    }
  }

  let edits = []
  let i = 0
  let j = 0

  while (i < source.length && j < target.length) {
    if (source[i] === target[j]) {
      edits.push(source[i])
      i += 1
      j += 1
    } else {
      if (memo[i + 1][j] <= memo[i][j + 1]) {
        edits.push('-' + source[i])
        i += 1
      } else {
        edits.push('+' + target[j])
        j += 1
      }
    }
  }

  while (j < target.length) {
    edits.push('+' + target[j])
    j += 1
  }

  return edits
}

/*

Name of peer: Alex
CS background: 

What can I improve?: Did not identify problem as DP early enough. I ruled it out in my head based on sample outputs
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
