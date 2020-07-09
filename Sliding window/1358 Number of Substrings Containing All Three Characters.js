//https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/


//strategy: maintain 3 pointers, the number of substrings at a given index (current pointer) with character a ...
//... is the furthest pointer's index + 1
const numberOfSubstrings = s => {
 
  //store total substrings
  let count = 0
  
  //define a pointer for each character and set them to -1 (guard value)
  let aI, bI, cI
  aI = bI = cI = -1
  
  //iterate through the string, time = O(n)
  for (let i = 0; i < s.length; i++) {
    
    //whatever letter we see, set the corresponding pointer to the current index ...
    if (s.charAt(i) === 'a') {
      aI = i
      //check that we've seen each letter. If we have, add the furthest pointer's index + 1
      if (bI !== -1 && cI !== -1) count += Math.min(bI, cI) + 1
    }
    
    else if (s.charAt(i) === 'b') {
      bI = i
      if (aI !== -1 && cI !== -1) count += Math.min(aI, cI) + 1
    }
    
    else {
      cI = i
      if (aI !== -1 && bI !== -1) count += Math.min(aI, bI) + 1
    }
  }
  
  //total time = O(n)
  //total space = O(1)
  return count
}