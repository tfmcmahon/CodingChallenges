//https://www.pramp.com/challenge/xJZA01AxdlfpM2vZ2Wwa
//other

function bracketMatch(text) {
  let minBrackets = 0
  let closedCount = 0
  let openCount = 0

  //O(n)
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      openCount++
      minBrackets++
    } else {
      closedCount++

      if (closedCount <= openCount) minBrackets--
      else minBrackets++
    }
  }
  return minBrackets
}

/*

Name of peer: Joy
CS background: Senior engineer

What can I improve?: Over thought the problem
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
