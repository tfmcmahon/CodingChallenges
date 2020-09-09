//https://www.hackerrank.com/challenges/pairs/problem

function pairs(k, arr) {
  let valMap = getValMap(arr)
  let diffPairs = 0

  for (let i = 0; i < arr.length; i++) {
    let target = arr[i] - k

    if (valMap.has(target)) {
      for (let index of valMap.get(target)) {
        i !== index && diffPairs++
      }
    }
  }

  return diffPairs
}

const getValMap = (arr) => {
  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    !map.has(arr[i]) && map.set(arr[i], [])
    map.get(arr[i]).push(i)
  }

  return map
}
