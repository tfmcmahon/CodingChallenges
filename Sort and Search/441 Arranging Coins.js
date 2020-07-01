//https://leetcode.com/problems/arranging-coins/


//binary search
const arrangeCoins = n => {
    
  let left = 1
  let right = n
  
  while (left <= right) {
    
    let mid = Math.floor((right - left) / 2) + left
    
    let sum = mid * (mid + 1) / 2
    if (sum == n) return mid
    else if (n < sum) right = mid - 1
    else left = mid + 1
  }
  
  return right
}


//brute force
const arrangeCoins = n => {
    
  let left = 1
  let right = n
  
  while (left <= right) {
    
    let mid = Math.floor((right - left) / 2) + left
    
    let sum = mid * (mid + 1) / 2
    
    if (sum == n) return mid
    else if (n < sum) right = mid - 1
    else left = mid + 1
  }
  
  return right
}