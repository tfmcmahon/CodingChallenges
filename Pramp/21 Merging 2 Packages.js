//https://www.pramp.com/challenge/L3wQBnQYAEh5K97W9ONK


function getIndicesOfItemWeights(arr, limit) {
  
  let packages = []
  let valMap = new Map()
  
  for (let i = 0; i < arr.length; i++) {
    
    !valMap.has(arr[i]) && valMap.set(arr[i], [])
    valMap.get(arr[i]).push(i)
    
  }

  for (let i = 0; i < arr.length; i++) {
    
    let target = limit - arr[i]
        
    if (valMap.has(target)) {
      
      let pair = valMap.get(target)
      
      if (i === pair[0]) {
        
        if (pair.length > 1) {
          
          packages = [pair[1], i]
          
          break
                      
        } else {
          
          continue
          
        }
        
      } else if (i < pair[0]) {
        
        packages = [pair[pair.length - 1], i]
        
      } else {
        
        packages = [i, pair[pair.length - 1]]
        
      }
            
    }
    
  }
  
  return packages
  
}

/*

Name of peer: Gulnoza
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/