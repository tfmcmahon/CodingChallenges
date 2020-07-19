//https://www.pramp.com/challenge/W5EJq2Jld3t2ny9jyZXG
//Arrays, strings, objects, sorting


const wordCountEngine = document => {
     
  let docArr = document.split(' ')
  
  let wordMap = new Map()

  for (let i = 0; i < docArr.length; i++) {
    
    let cleanedString = ''
    let lowerString = docArr[i].toLowerCase()
    
    for (let i = 0; i < lowerString.length; i++) {
      
      if (lowerString.charCodeAt(i) < 97 || lowerString.charCodeAt(i) > 123) continue
      
      cleanedString += lowerString.charAt(i)
      
    }
    
    //we must store the index in the map for our sorting function later
    let key = wordMap.get(cleanedString) || [0, i]
    if (cleanedString) wordMap.set(cleanedString,  [key[0] + 1, key[1]])
    
  }
  
  let sortedWords = []
  
  for (let [word, [freq, order]] of wordMap.entries()) {
    
    sortedWords.push([word, freq, order])
    
  }

  sortedWords.sort(([aWord, aFreq, aOrder], [bWord, bFreq, bOrder]) => {
    
    //if the frequency of the words is the same, sort by index (order in which we saw them)
    if (bFreq === aFreq) return aOrder - bOrder
    return bFreq - aFreq
  })

  let result = []
  
  for (let i = 0; i < sortedWords.length; i++) {
    
    let wordFinal = sortedWords[i][0]
    let numFinal = sortedWords[i][1].toString()
    
    result.push([wordFinal, numFinal])
    
  }
  
  // O(n * m) + O(n * log(n)) + O(n)
  return result
  
}

/*

Name of peer: Sambo
CS background: Grad student

What can I improve?: Minor syntax errors
What did my peer think I can improve?: 

What did I do well?: clean code.
What did peer think I did well?: clean code, properly solved problem. Asked me to find a better option that ascii values to check if a char was a-z

*/