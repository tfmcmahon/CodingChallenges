//https://leetcode.com/problems/fair-candy-swap/
//sort and binary search


//strategy, sum earch candy array, get the average, then get the difference between the average and one of the arrays
//add the values of the other array to a set
//look through the first array, for each value, check if the other array has the average difference - value in its set
const fairCandySwap = (A, B) => {
  
  //sum the arrays, time = O(n + m)
  let aSum = A.reduce((a, b) => a + b)
  let bSum = B.reduce((a, b) => a + b)
  //get the average of the two arrays and the deficit or surplus in array A
  let average = (aSum + bSum) / 2
  let aDiff = aSum - average
  
  //define a set and add all values from array B to it
  let setB = new Set()
  for (let val of B) setB.add(val)
  
  //loop through array a, time = O(n)
  for (let i = 0; i < A.length; i++) {
    
    //check if the set has the current index's value minus the surplus/deficit, time = O(1)\
    //if so, return the pair
    //total time = O(n + m)
    if (setB.has(A[i] - aDiff)) return [A[i], A[i] - aDiff]
    
  }
  
}

//strategy2: sort the arrays in ascending order, sum each array and get the difference / 2
//perform binary search on the larger array while looping through the smaller
const fairCandySwap = (A, B) => {
  
  //sort each array, time = O(n * log(n) + m * log(m))
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b)
  
  //sum the arrays, time = O(n + m)
  let aSum = A.reduce((a, b) => a + b)
  let bSum = B.reduce((a, b) => a + b)
  let difference = Math.abs((aSum - bSum) / 2)
  
  let swaps = aSum > bSum ? getSwaps(A, B, difference) : getSwaps(B, A, difference)
  
  return aSum > bSum ? swaps : swaps.reverse()
  
}

const getSwaps = (large, small, difference) => {
  
  for (let i = 0; i < small.length; i++) {
    
    let left = 0
    let right = large.length - 1
    let target = difference + small[i]
    
    while (left <= right) {

      let mid = Math.floor((right + left) / 2)

      if (target === large[mid]) return [large[mid], small[i]]
      else if (target > large[mid]) left = mid + 1
      else right = mid - 1

    }
    
  }
  
}