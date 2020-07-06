//https://leetcode.com/problems/fruit-into-baskets/
//sliding window with map

//strategy: iterate through the array, maintaining a left and aright pointer
//store values in a map while traversing with the right pointer,
//if the map size goes over K (= 2), increment the left pointer while decrementing and removing map values.
const totalFruit = tree => {
  
  //define max value, left pointer, and a map; space = O(n)
  let maxFruit = 0
  let left = 0
  let map = new Map()
  
  //loop through the array argument, time = O(n)
  for (let right = 0; right < tree.length; right++) {
    
    //check if the map has a key corresponding to the right pointer value, if it doesn't initialize one
    !map.has(tree[right]) && map.set(tree[right], 0)
    //increment the map key value
    map.set(tree[right], map.get(tree[right]) + 1)
    
    //if the map size gets larger than the problem stipulation ...
    while (map.size > 2) {
      
      //decrement the key at the left pointer's value
      map.set(tree[left], map.get(tree[left]) - 1)
      //if the value goes to 0, remove the key
      if (!map.get(tree[left])) map.delete(tree[left])
      //increment the left pointer
      left++
      
    }
    
    //calculate the max value
    maxFruit = Math.max(maxFruit, right - left + 1)
    
  }
  
  //total time and space = O(n)
  return maxFruit
  
}
