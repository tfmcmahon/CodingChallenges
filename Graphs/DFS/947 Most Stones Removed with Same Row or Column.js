//https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
//DFS / union find

const removeStones = stones => {
  
  if (!stones || !stones.length) return 0
  
  //initialize an adjacency list and a visited set
  let adjList = getMap(stones)
  let visited = new Set()
  
  //total number of stones we can remove (see description)
  let moves = 0

  //iterate through all of the stones
  for (let [x, y] of stones) {
    let node = `${x}to${y}`
    let componentSize = 0
    
    //if we have not visited a stone, perform DFS
    if (!visited.has(node)) {
      let stack = [node]
      visited.add(node)
      componentSize++
      
      while (stack.length) {
        let [u, v] = stack.pop().split('to')

        //check all connected components on x axis, tallying each new stone we see (connected node)
        if (adjList.get('row').get(Number(u))) {
          for (let stone of adjList.get('row').get(Number(u))) {

            if (!visited.has(stone)) {
              visited.add(stone)
              stack.push(stone)
              componentSize++
            }
          }
        }

        //check all connected components on y axis, tallying each new stone we see (connected node)
        if (adjList.get('col').get(Number(v))) {
          for (let stone of adjList.get('col').get(Number(v))) {
            if (!visited.has(stone)) {
              visited.add(stone)
              stack.push(stone)
              componentSize++
            }
          }
        }
      }

      //we cannot remove the very last node of a component, so total moves is component size - 1
      moves += componentSize - 1
    }
  }
  return moves
}

const getMap = stones => {
  
  //we need a 2D map, since we want to connect all stones that share an x value and y value separately
  let map = new Map()
  map.set('row', new Map())
  map.set('col', new Map())
  
  for (let [x, y] of stones) {
    let node = `${x}to${y}`
    
    if (!map.get('row').has(x)) map.get('row').set(x, [])
    if (!map.get('col').has(y)) map.get('col').set(y, [])
    
    map.get('row').get(x).push(node)
    map.get('col').get(y).push(node)
  }
  
  return map
}