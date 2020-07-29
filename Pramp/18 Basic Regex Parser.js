//https://www.pramp.com/challenge/KvZ3aL35Ezc5K9Eq9Llp
//edge case identification and testing


const isMatch = (text, pattern) => {
  
  return isMatchHelper(text, pattern, 0, 0)
  
}


const isMatchHelper = (text, pattern, textIndex, patIndex) => {

  if (textIndex >= text.length) {
   
    if (patIndex >= pattern.length) {
      
      return true
      
    } else {
      
      if (patIndex + 1 < pattern.length && pattern[patIndex + 1] === '*') {
        
        return isMatchHelper(text, pattern, textIndex, patIndex + 2)
        
      } else {
        
        return false
        
      }
      
    }
    
  } else if (patIndex >= pattern.length && textIndex < text.length) {
    
    return false
    
  } else if (patIndex + 1 < pattern.length && pattern[patIndex + 1] === '*') {
    
    if (pattern[patIndex] === '.' || text[textIndex] === pattern[patIndex]) {
      
      return (isMatchHelper(text, pattern, textIndex, patIndex + 2) || isMatchHelper(text, pattern, textIndex + 1, patIndex))
      
    } else {
      
      return isMatchHelper(text, pattern, textIndex, patIndex + 2)
      
    }
    
  } else if (pattern[patIndex] === '.' || pattern[patIndex] === text[textIndex]) {
    
    return isMatchHelper(text, pattern, textIndex + 1, patIndex + 1)
    
  } else {
    
    return false
    
  }
  
}


/*

Name of peer: Gulnoza
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/