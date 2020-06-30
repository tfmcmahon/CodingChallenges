//https://leetcode.com/problems/permutations/
//back tracking

const permute = nums => {
 
  //define permutation array and a stack
  let perms = []
  let stack = []
  
  //input validation and initiale the stack with an empty permutation array and the nums array
  if (nums.length) stack.push([[], nums])
  
  //perform DFS = O(n)
  while (stack.length) {
    
    //destructure
    let [perm, remaining] = stack.pop()
    
    //if there are still items in the nums array, try to make all possible perms
    if (remaining.length) {
      
      //loop through the nums array = O(n * n)
      for (let i = 0; i < remaining.length; i++) {
        
        let temp = [...perm, remaining[i]]       
        let arr = [...remaining.slice(0, i), ...remaining.slice(i + 1)]

        arr.length ? stack.push([temp, arr]) : perms.push(temp)
      }
    }
  }
  
  return perms
}