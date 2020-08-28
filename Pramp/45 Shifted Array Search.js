//https://www.pramp.com/challenge/N5LYMbYzyOtbpovQoYPX
//searching and sorting

function shiftedArrSearch(shiftArr, num) {
  const getShiftIndex = () => {
    let start = 0
    let end = shiftArr.length - 1

    while (start <= end) {
      let mid = ~~((end + start) / 2)

      if (mid === 0 || shiftArr[mid] < shiftArr[mid - 1]) return mid
      else if (shiftArr[mid] > shiftArr[0]) start = mid + 1
      else end = mid - 1
    }

    return 0
  }

  let shiftIndex = getShiftIndex()

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
