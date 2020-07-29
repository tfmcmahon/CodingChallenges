//https://leetcode.com/problems/combinations/
//combinatronics


const combine = (n, k) => {
    
  let combinations = []
  
  const getCombos = (build, set) => {
    
    if (build.length === k) return combinations.push(build)
    
    for (let i = 1; i <= n; i++) {
      
      if (!set.has(i)) {
        
        set.add(i)
        getCombos([...build, i], new Set([...set]))
        
      }
      
    }
    
  }
  
  getCombos([], new Set())
  
  return combinations
  
}