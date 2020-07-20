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
    //we need to do this because stable sort will sometimes not return things in 'seen' order if they are the same.
    if (bFreq === aFreq) return aOrder - bOrder
    return bFreq - aFreq
  })

  let result = []
  
  for (let [sortedWord, sortedFreq, sortedIndex] of sortedWords) {
    
    result.push([sortedWord, sortedFreq.toString()])
    
  }
  
  // O(n * m) + O(n * log(n)) + O(n)
  return result
  
}

/*

Name of peer: Sambo
CS background: Master's degree

What can I improve?: Minor syntax errors. Misused // did not identify problems with default (stable) sort and identical items. Careful here.
What did my peer think I can improve?: 

What did I do well?: clean code.
What did peer think I did well?: clean code, properly solved problem. Asked me to find a better option that ascii values to check if a char was a-z.
// after thinking on it; regex?

*/