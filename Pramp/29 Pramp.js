//https://www.pramp.com/challenge/r1Kw0vwG6OhK9AEGAyWV
//arrays and strings, sorting

function findGrantsCap(grantsArray, newBudget) {

  grantsArray.sort((a , b) => a - b)

  let leftBudget = newBudget

  for (let i = 0; i < grantsArray.length; i++) {
    
    let averageVal = leftBudget / (grantsArray.length - i)
    
    if (grantsArray[i] <= averageVal) {
      
        leftBudget -= grantsArray[i]
      
    } else {
      
      return averageVal
      
    }
    
  }

  return grantsArray
  
}

/*

Name of peer: amnish
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/