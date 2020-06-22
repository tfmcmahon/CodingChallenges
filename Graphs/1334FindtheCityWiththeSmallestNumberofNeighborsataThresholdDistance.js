//bellman-ford

const findTheCity = (n, edges, threshold) => {
 
  let reach = [...Array(n)].map(() => Array(n).fill(Infinity))
  for (let i = 0; i < n; i++) {
      reach[i][i] = 0
  }
  
  const bellmanFord = reach => {
      for (let i = 1; i < n; i++) {
          let update = 0
          for (let [u, v, w] of edges) {
              if (reach[u] > reach[v] + w) {
                  reach[u] = reach[v] + w
                  update++
              }
              if (reach[v] > reach[u] + w) {
                  reach[v] = reach[u] + w
                  update++
              }
          }
          if (!update) break
      }
  }
  
  for (let i = 0; i < n; i++) bellmanFord(reach[i])
  
  const minCity = () => {
      let min = Infinity
      let city = -1
      for (let i = 0; i < n; i++) {
          let count = 0
          for (let j = 0; j < n; j++) {
              if (i !== j && reach[i][j] <= threshold) count++
          }
          if (min >= count) {
              min = count
              city = i
          }
      }
      return city
  }
  
  return minCity()
}