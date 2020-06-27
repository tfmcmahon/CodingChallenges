//https://leetcode.com/problems/task-scheduler/
//

const leastInterval = (tasks, n) => {
    
  if (!n) return tasks.length
  
  let map = new Map()
  
  for (let task of tasks) {
    if (!map.has(task)) map.set(task, 0)
    map.set(task, map.get(task) + 1)
  }
  
  let max = 0
  
  for (let task of map.keys()) {
    max = Math.max(max, map.get(task))
  }
  
  let count = 0
  
  for (let task of map.keys()) {
    if (map.get(task) === max) count++
  }

  return Math.max(
    (max - 1) * (n + 1) + count,
    tasks.length
  )
}