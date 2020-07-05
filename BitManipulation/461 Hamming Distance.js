//https://leetcode.com/problems/hamming-distance/
// XOR

//strategy: use XOR operator to calculate the hamming number,
// XOR returns a 1 when two binary numbers have different digits
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR
const hammingDistance = (x, y) => {
  
  //calculate the hamming number, define distance variable
  let ham = x ^ y
  let distance = 0
  
  //iterate through the binary digits of the hamming number = O(log(x ^ y))
  while (ham) {
    
    //tally each 1 in the hamming number's binary representation by calculating its mod 2 value
    distance += ham % 2
    //move to the next binary digit by dividing by 2
    ham = ~~(ham / 2)
  }
  
  //return the distance tally = O(log(x ^ y))
  return distance
}