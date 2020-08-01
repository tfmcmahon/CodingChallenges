//https://www.pramp.com/challenge/4E4NW7NjbnHQEx1AxoXE
//sorting and searching


function absSort(arr) {

  arr.sort((a, b) => {
  
    let absA = Math.abs(a)
    let absB = Math.abs(b)
    
    if (absA !== absB) {
    
      return absA - absB
    
    }
      
    return a - b

  })
  
  return arr
  
}

/*

Name of peer: tamas
CS background: 

What can I improve?: brush up on different sorting functions.
What did my peer think I can improve?: familiairze with sorting algos. tip: print it out and put it near monitor (types, time and space complexities)

What did I do well?: Clean code, speed
What did peer think I did well?: Clean code, speed

*/