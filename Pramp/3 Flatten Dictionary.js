//https://www.pramp.com/challenge/AMypWAprdmUlaP2gPVLZ
//pramp interview 2 - Flatten a Dictionary


const flattenDictionary = dict => {
    
  let stack = []
  let flattenedDict = {}
  
  stack.push([dict, ''])

  while (stack.length) {

    let [map, string] = stack.pop()
    
     for (let key of Object.keys(map)) {

       if (typeof map[key] === 'string') {

        let nextString = string + (string && key ? '.' : '') + key
        flattenedDict[nextString] = map[key]
        
      } else {
        
        let nextString = string + (!string ? '' : '.') + key
        stack.push([map[key], nextString])
        
      }
   
    }
    
  }
  
  return flattenedDict
  
}


/*

name of peer: Andre
background:

what can i improve? syntax // object manipulation
what did peer think i can improve?

what did i do well? problem identificiation, clean code
what did peer think i did well?

*/