//https://leetcode.com/problems/group-anagrams/


const groupAnagrams = strs => {

  //initialize and build a map
  let map = new Map()
  
  //interate through the strings = O(n)
  for (let str of strs) {
    let sum = 0
    //interate through the string characters = O(l), raising them to the power of 4 ...
    //... which prevents strings with the same sum but different letters from being grouped
    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(str.charCodeAt(i), 4)
    }
    
    if (!map.has(sum)) map.set(sum, [])
    map.get(sum).push(str)
  }
  
  let anagrams = []
  
  //iterate through the map keys and push them to the result array = O(n)
  for (let key of map.keys()) {
    anagrams.push(map.get(key))
  }
  
  //total time = O(n * l + n) = O(n * l)
  return anagrams
}