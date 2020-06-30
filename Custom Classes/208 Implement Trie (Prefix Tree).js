//https://leetcode.com/problems/implement-trie-prefix-tree/


class Trie {
  constructor() {
    //store data in a map
    this.trie = new Map()
  }
  
  insert(word) {
    //set working node as a copy of the data
    let node = this.trie
    
    //loop through the characters of the word
    for (let char of word) {
     
      //if the node doesn't have the character, create a new key
      !node.has(char) && node.set(char, new Map())
      //move the working node to the next letter
      node = node.get(char)
    }
    
    //set the last key as the word
    node.set('word', word)
  }
  
  search(word) {

    //set working node as a copy of the data
    let node = this.trie

    //loop through the characters of the word
    for (let char of word) {
      
      //check for the next character key, if it exists, move to it
      if (node.has(char)) node = node.get(char)
      //otherwise return false
      else return false
    }
    
    //if we've reached the end of the word, check for the 'word' key to confirm it isn't just a prefix
    return node.has('word')
  }
  
  startsWith(prefix) {
    
    //similar to above
    let node = this.trie
    
    for (let char of prefix) {
      
      if (node.has(char)) node = node.get(char)
      else return false
    }
    
    //except we know we've found a prefix and don't need to check for a word key
    return true
  }
  
}