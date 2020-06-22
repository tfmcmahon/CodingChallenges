const findCheapestPrice = (n, flights, src, dst, K) => {
  
  //initialize shortest path array, set the source node to 0
  let price = Array(n + 1).fill(Infinity)
  price[src] = 0
  
  //iterate through the flights K times
  for (let i = 0; i < K + 1; i++) {
    //work on a copy of the path array to save space
    let clone = [].concat(price)
    
    for (let [u, v, w] of flights) {
      //current node's path value is minimum of it's existing value OR incoming node + weight
      clone[v] = Math.min(clone[v], price[u] + w)
    }
    //merge the clone onto the original array
    price = [].concat(clone)
  }
  
  //return the shortest path value, if Infinity we were unable to reach it.
  return price[dst] === Infinity ? -1 : price[dst]
}