//https://www.pramp.com/challenge/N5LYMbYzyOtbpovQoYPX
//searching and sorting

function shiftedArrSearch(shiftArr, num) {
  let shiftIndex = 0

  //o(n)
  for (let i = 1; i < shiftArr.length; i++) {
    if (shiftArr[i] < shiftArr[i - 1]) {
      shiftIndex = i
      break
    }
  }

  let endVal = shiftArr[shiftArr.length - 1] //last index

  if (endVal === num) return shiftArr.length - 1

  let left = endVal > num ? shiftIndex : 0
  let right = endVal > num ? shiftArr.length - 1 : shiftIndex - 1

  let targetIndex = -1

  //log(n)
  while (left <= right) {
    let mid = ~~((right + left) / 2)

    if (shiftArr[mid] === num) return mid
    else if (shiftArr[mid] < num) left = mid + 1
    else right = mid - 1
  }

  //O(n)
  return targetIndex
}

/*

Name of peer: Joe
CS background: CS undergrad

What can I improve?: Spent a little too much time on trying to determine a one-size-fits all solution, needed to break the problem down into steps:
1: find pivot
2: bin search based on pivot
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
