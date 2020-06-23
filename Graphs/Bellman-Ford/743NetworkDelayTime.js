//https://leetcode.com/problems/network-delay-time/
//bellman-ford shortest path

const networkDelayTime = (times, N, K) => {
  
  //initialize an array to store our shortest paths
  let time = Array(N + 1).fill(Infinity)
  //set time of the Kth node and the 0th node to 0. We are base 1 index so we don't need the 0th node
  time[K] = 0, time[0] = -Infinity
  
  //iterate through all graph nodes
  for (let i = 0; i < N; i++) {
      //store an update counter
      let count = 0
      //iterate through the weighted adjacency list
      for (let [u, v, w] of times) {
          //if the shortest path of the source node is Infinity, 
          //move to the next node since we don't know how to get to this one yet
          if (time[u] === Infinity) continue
          //otherwise, if this path (parent + weight to next) is lower, store it in the shortest path array
          if (time[v] > time[u] + w) {
              time[v] = time[u] + w
              count++
          }
      }
      //if we haven't made any updates in this cycle, we're done
      if (!count) break
  }
  
  //our total time is the maximum shortest path
  let total = Math.max(...time)
  
  //if any of the paths are infinity, we couldn't visit them.
  //return -1 per problem stipulations.
  return total === Infinity ? -1 : total
}