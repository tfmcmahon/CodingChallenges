//https://leetcode.com/problems/word-search-ii/
//Graph DFs/back-tracking with a trie


const findWords = (board, words) => {
  
  //initialize the trie and result array
  let trie = getTrie(words)
  let found = []
  
  //initialze directions array, and validation function ...
  //validator check that we are in bounds and that the current node has the seen letter
  let dirs = [[1, 0], [-1, 0], [0, -1], [0, 1], [0, 0]]
  let validate = (x, y, node) => {
    return x >= 0 && y >= 0 && x < board.length && y < board[0].length && node.has(board[x][y])
  }

  //perform DFS = O(n * m)
  let search = (x, y, node) => {
    
    //if our current node contains the 'word' key, we've found a word, push it to the result array
    if (node.get('word')) {
      found.push(node.get('word'))
      //set the 'word' key to null so that we don't return duplicates
      node.set('word', null)
    }
    
    //try to move in each direction
    for (let [dx, dy] of dirs) {
      let row = x + dx
      let col = y + dy
      
      //validate the movements
      if (validate(row, col, node)) {
        //store the next character
        let char = board[row][col]
        //flip the space to '#' so that we don't back-track over it
        board[row][col] = '#'
        //continue searching, moving to the next square
        search(row, col, node.get(char))
        //reset the space so that multiple words can use the same letter
        board[row][col] = char
      }
    }
  }
  
  //loop through the board = O(n * m)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      //initialize DFS with the coordinates and the trie
      search(i, j, trie)
    }
  }
  
  //total time = O(n * m) ^ 2 + O(w * x) = O (n * m)

  return found
}

const getTrie = words => {
  
  let trie = new Map()
  
  //loop through the words array = O(w * x)
  for (let word of words) {
    
    //define the current node
    let node = trie
    
    //loop through the letters of the word
    for (let char of word) {
      //add a new new node onto the current and set the working node to the new node
      !node.has(char) && node.set(char, new Map())
      node = node.get(char)
    }
    
    //the last node of word will be the actual word, which we will push to the result array when we reach it
    node.set('word', word)
  }
  
  //total time is O(words length * each word length) = O(w * x)
  return trie
}