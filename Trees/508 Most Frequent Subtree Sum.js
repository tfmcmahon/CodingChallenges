//https://leetcode.com/problems/most-frequent-subtree-sum/
//tree dfs traversal


//recursively traverse the tree, summing the subtrees and storing each sum as we go.
const findFrequentTreeSum = root => {
  
  //initialize a map and a max value variable, space = O(n)
  let valMap = new Map()
  let maxVal = -Infinity  
  
  //recursive traversal of the tree, time = O(n) since we are visiting every node
  const getTreeSum = root => {
  
    //guard clause, we've reached the end of the tree, return 0
    if (!root) return 0
    
    //the sum of this sub tree is its value + left node + right node
    let treeSum = root.val + getTreeSum(root.left) + getTreeSum(root.right)

    //get or default a map key for the node's sum
    valMap.set(treeSum, (valMap.get(treeSum) || 0) + 1)
    //remeber the maximum sum we've seen
    maxVal = Math.max(maxVal, valMap.get(treeSum))
    
    //return the sub tree sum
    return treeSum

  }
  
  //begin recursion
  getTreeSum(root)

  //initialize a result array
  let freqTreeSum = []

  //iterate through the map, returning all values' frequencies that match the max value seen, time = O(n)
  for (let [key, val] of valMap.entries()) {
    
    if (val === maxVal) freqTreeSum.push(key)
    
  }
  
  //total time = O(2 * n) = O(n)
  //total space = O(n)
  return freqTreeSum
  
}

