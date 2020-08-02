//https://www.pramp.com/challenge/jKoA5GAVy9Sr9jGBjz04
//binary search


function indexEqualsValueSearch(arr) {

  let lowestI = -1
  let left = 0
  let right = arr.length - 1
  
  while (left <= right) {
    
    let mid = Math.floor((right + left) / 2) 
    
    if (arr[mid] === mid) {
      
      lowestI = mid
      right = mid - 1
      
    } else if (arr[mid] < mid) {
       
       left = mid + 1
               
    } else {
      
      right = mid - 1
    }
    
  }
  
  return lowestI
  
}

/*

Name of peer: Ranjeet
CS background: 5+ year SWE

What can I improve?: tiny logic error
What did my peer think I can improve?: 

What did I do well?: clean code, explained thought process
What did peer think I did well?: 

*/