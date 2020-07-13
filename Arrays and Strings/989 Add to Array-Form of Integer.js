//https://leetcode.com/problems/add-to-array-form-of-integer/


//strategy: iterate through A; sum A's index, K mod 10, and any remainder
//continue while K > 0 or there is a remainder value
const addToArrayForm = (A, K) => {
  
  //define the last index of the array, a remainder, a digit, and a total sum
  let i = A.length - 1
  let remainder = 0
  let digit, sum
  
  //perform digit addition while K > 0 or there is a remainder value, total time = O(K % 10 + 1)
  while (K || remainder) {

    //calulate the 1's digit of K
    digit = K % 10
    
    //sum up K digit, any remainder, and the Array value at i if i is inbounds
    sum = digit + remainder + (i >= 0 ? A[i] : 0)
    //set the remainder value by checking if the sum is gt 9
    remainder = sum > 9 ? 1 : 0

    //mod 10 the sum (has no effect if below 10)
    sum %= 10
    //if i is in bounds, update A's value at i and decrement i. Otherwise unshift the sum
    i >= 0 ? A[i--] = sum : A.unshift(sum)
    
    //divide K by 10 and take the floor
    K = ~~(K / 10)
  }
  
  //total time = O(K % 10)
  return A
  
}