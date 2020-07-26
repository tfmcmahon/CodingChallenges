//https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnBZ


const sortKMessedArray = (arr, k) => {
  
  for (let i = 0; i < arr.length; i++) {
    
    for (let j = i + 1; j <= i + k && j < arr.length; j++) {
      
      let temp = arr[i]

      if (arr[j] < arr[i]) {

        arr[i] = arr[j]
        arr[j] = temp
        
      }
      
    }
    
  }
  
  return arr
  
}

/*

Name of peer: Jamie
CS background: 1st year SWE

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/