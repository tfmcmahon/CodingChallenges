//https://leetcode.com/problems/minimum-genetic-mutation/
//backtracking


//strategy: loop through string, try every possible option against the bank.
//If we get a bank match, add the item along with a copy of the bank set (minus the match) to the stack
const minMutation = (start, end, bank) => {
 
  let bankSet = new Set([...bank])
  let stack = []
  let minCount = Infinity
  
  let candidates = checkMutation(start, end, new Set([...bankSet]))
  candidates.forEach(([candidate, set]) => stack.push([candidate, 1, set]))

  while (stack.length) {

    let [build, count, set] = stack.pop()
    
    if (build === end) {
      
      minCount = Math.min(minCount, count)
      continue
      
    }
    
    let nextCandidates = checkMutation(build, end, new Set([...set]))
    nextCandidates.forEach(([candidate, nextSet]) => stack.push([candidate, count + 1, nextSet]))
    
  }
  
  return minCount === Infinity ? -1 : minCount
  
}

const checkMutation = (start, end, bankSet) => {
  
  let candidates = []
  let chars = ['A', 'T', 'G', 'C']
  
  for (let i = 0; i < start.length; i++) {
    
    for (let char of chars) {
      
      let next = start.substring(0, i) + char + start.substring(i + 1)
      if (bankSet.has(next)) {
        bankSet.delete(next)
        candidates.push([next, bankSet])
      }
    }
    
  }

  return candidates
  
}