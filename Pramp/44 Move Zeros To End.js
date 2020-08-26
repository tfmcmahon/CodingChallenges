//https://www.pramp.com/challenge/9PNnW3nbyZHlovqAvxXW
//arrays and strings

function moveZerosToEnd(arr) {
  let zeroedArr = []

  for (let num of arr) {
    if (num !== 0) zeroedArr.push(num)
  }

  let zeroCount = arr.length - zeroedArr.length

  while (zeroCount--) {
    zeroedArr.push(0)
  }

  return zeroedArr
}

/*

Name of peer: Adam
CS background: 4th year freelancer

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

code mentor, wise ant
*/
