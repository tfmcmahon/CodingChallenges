//https://www.pramp.com/challenge/BrLMj8M2dVUoY95A9x3X
//array manipulation


const calcDroneMinEnergy = route => {
  
  let energy = 0
  let minEnergy = 0
  
  for (let i = 1; i < route.length; i++) {
    
    let [x, y, z] = route[i]
    let [prevX, prevY, prevZ] = route[i - 1]
     
    energy += prevZ - z

    minEnergy = Math.min(minEnergy, energy)
    
  }
  
  return Math.abs(minEnergy)
  
}


/*

Name of peer: Eli
CS background: Recent codecamp grad

What can I improve?: 
What did my peer think I can improve?: Study difference between arrow functions and regular functions.

What did I do well?: Clean code, explained well
What did peer think I did well?: 

*/