//https://www.pramp.com/challenge/15oxrQx6LjtQj9JK9XlA


const findDuplicates = (arr1, arr2) => {

  let pointer1 = 0
  let pointer2 = 0
  
  let duplicates = []
  
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    
    //succes case, we have matching values
    if (arr1[pointer1] === arr2[pointer2]) {
      
      duplicates.push(arr1[pointer1])
      pointer1++
      pointer2++
      
    } else if (arr1[pointer1] < arr2[pointer2]) {
      
      pointer1++
    
    } else {
      
      pointer2++
      
    } 
    
  }
  
  return duplicates
  
}

/*

Name of peer: Himansh
CS background: first year SWE

What can I improve?: 
What did my peer think I can improve?: He says to start at brute force rather than linear.

What did I do well?: Thought through clearly and methodically
What did peer think I did well?: Surprised that I got the binary search solution

*/