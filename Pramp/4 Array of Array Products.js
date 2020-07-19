//https://www.pramp.com/challenge/7Lg1WA1nZqfoWgPbgM0M
//time efficiency


// O(n ^ 2)
const arrayOfArrayProducts = arr => {
  
  if (!arr.length || arr.length === 1) return []
  
  let result = []

  for (let i = 0; i < arr.length; i++) {
    
    let total = 1
    
    for (let j = 0; j < arr.length; j++) {
      
      if (j !== i) total *= arr[j]
      
      result[i] = total
    }
        
  }
  
  return result
}

// O(2n) = O(n)
const arrayOfArrayProducts = arr => {
  
  if (!arr.length || arr.length === 1) return []
  
  let result = []
  let subProduct = 1

  for (let i = 0; i < arr.length; i++) {  
  
    result[i] = subProduct 
    subProduct *= arr[i]
    
  }
  
  subProduct = 1
  
  for (let i = arr.length - 1; i >= 0; i--) {  
  
    result[i] *= subProduct 
    subProduct *= arr[i]
    
  }  
  
  return result
  
}


/*

name of peer: Luci
CS background: recent bootcamp grad

what can i improve?: think outside the box to get o(n) solutions :(
what did peer think i can improve?: stick to straightforward answers first, then try to improve

what did i do well?: wrote clean code
what did peer think i did well?: wrote clean, concise code

*/