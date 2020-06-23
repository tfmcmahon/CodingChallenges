//https://leetcode.com/problems/course-schedule-ii/
//topology sort

const findOrder = (numCourses, prereqs) => {

  //initialize result array, topology map, reverse adj list
  let courses = []
  let topo = Array(numCourses).fill(0)
  let map = new Map()
  
  //populate the adj list and the the topo map
  for (let [u, v] of prereqs) {
      if (!map.has(v)) map.set(v, [])
      map.get(v).push(u)
      topo[u]++
  }
  
  //initialize the the queue by looping through the topo map and adding any 'flat' values
  let queue = []
  for (let i = 0; i < topo.length; i++) {
      if (!topo[i]) queue.push(i)
  }
  
  //process the queue
  while (queue.length) {
      let node = queue.shift()
      
      //'flatten' any nodes that need the node as a prerequisite
      if (map.has(node)) {
          for (let adj of map.get(node)) {
              topo[adj]--
              //if the adj node no longer needs any prereqs, add it to the queue
              if (!topo[adj]) queue.push(adj)
          }
      }
      //take the course (push it to the result array)
      courses.push(node)
  }
  
  //if we have taken all the courses, return courses, else return an empty array
  return courses.length === numCourses ? courses : []
}