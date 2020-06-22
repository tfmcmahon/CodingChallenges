const singleNumber = nums => {
    
  let map = new Map()
  let set = new Set()
  
  for (let num of nums) {
      set.add(num)
      if (!map.has(num)) map.set(num, 0)
      map.set(num, map.get(num) + 1)
      
      if (map.get(num) === 3) set.delete(num)
  }
  
  return set.size === 1 ? [...set].pop() : null
}