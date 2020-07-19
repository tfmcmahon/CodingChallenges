//https://leetcode.com/problems/unique-number-of-occurrences/
//map + set


//strategy: Loop through array, store each value as the key in a map. increment the key's frequency
//each time we see the same value.
//loop through the map, adding each value to a set. Check if the set already has the value.
const uniqueOccurrences = arr => {
    
  //initialize a map
  let map = new Map()
  
  //loop through the array, time = O(n)
  for (let i = 0; i < arr.length; i++) {
    
    //set or increment the ith value's frequency
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    
  }
  
  //initialize a set
  let uniques = new Set()
  
  //loop through the map's values, time = O(n)
  for (let val of map.values()) {

    //if the set already contains the freq value, return false
    if (uniques.has(val)) return false
    //add the freq to the set
    uniques.add(val)
    
  }
  
  //if we didn't see a duplicate value, return true
  //total time = O(2 * n) = O(n)
  return true
  
}