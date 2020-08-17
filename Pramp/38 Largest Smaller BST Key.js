//https://www.pramp.com/challenge/pK6A4GA5YES09qKmqG33
//Trees, searching, BST

BinarySearchTree.prototype.findLargestSmallerKey = function (num) {
  // your code goes here

  let current = this.root
  let nextSmallest = -1

  while (current !== null) {
    if (current.key >= num) {
      current = current.left
    } else {
      nextSmallest = current.key
      current = current.right
    }
  }

  return nextSmallest
}

/*

Name of peer: Francisco
CS background: Senior Front end developer

What can I improve?: I kept trying to handle to child pointers, which was incorrect. This problem functioned more like a linked list where you move the pointer until you have a null,
rather than checking if you have a child to move to.
What did my peer think I can improve?: 

What did I do well?: Competency in tree manipulation
What did peer think I did well?: 

*/
