//https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/


const groupThePeople = groupSizes => {
  
  let peopleMap = new Map()
  
  for (let i = 0; i < groupSizes.length; i++) {
    
    peopleMap.get(groupSizes[i]) ? peopleMap.get(groupSizes[i]).push(i) : peopleMap.set(groupSizes[i], [i])
    
  }
  
  let groups = []
  
  for (let [size, people] of peopleMap.entries()) {
    
    while (peopleMap.get(size).length) {
      
      let group = []
      
      for (let i = 0; i < size; i++) {
        
        group.push(peopleMap.get(size).pop())
        
      }
      
      groups.push(group)
      
    }
    
  }
  
  return groups
  
}