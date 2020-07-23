//https://www.pramp.com/challenge/MW75pP53wAtzNPVLPG0d
//BFS/shortest distance


const shortestWordEditPath = (source, target, words) => {
  
  let mutations = Infinity
  let seen = new Set(words)
  let queue = []
  
  source && queue.push([source, 0])
  
  while (queue.length) {
    
    let [string, dist] = queue.shift()

    if (string === target) mutations = Math.min(mutations, dist)
    
    for (let word of seen.values()) {
      
      let diffCount = 0
   
      for (let i = 0; i < string.length; i++) {

        if (string[i] !== word[i] && string.length === word.length) diffCount++
        
      }

      if (diffCount === 1) {
        
        seen.delete(word)
        queue.push([word, dist + 1])
        
      }
      
    }
    
  }

  return mutations === Infinity ? -1 : mutations
  
}


/*

Name of peer: Eli
CS background: recent code camp grad

What can I improve?: problem identification. syntax error caused tests to fail, had variable definition in the wrong spot
What did my peer think I can improve?: identify problem by myself

What did I do well?: clean code, good execution of BFS
What did peer think I did well?: clean code, well done algo

*/