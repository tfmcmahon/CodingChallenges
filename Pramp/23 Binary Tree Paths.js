//https://leetcode.com/problems/binary-tree-paths/


var binaryTreePaths = function(root) {
    
  let result = []
  
  getPaths(root, [], result, 0)
  
  return result
};

const getPaths = (root, path, result) => {
  
  if (!root) return
  //check if we have reached a leafnode with no children
  //if so, push the path into the result array
  path.push(root.val)
  
  if (!root.left && !root.right) result.push(path.join('->'))
  //otherwise, push the root val into the path

  //move down both sides of the tree if they exist
  if (root.left) getPaths(root.left, path, result)
  if (root.right) getPaths(root.right, path, result)
  
  path.pop()
}


/*

Name of peer: Marcel
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/