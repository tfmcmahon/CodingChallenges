//https://www.pramp.com/challenge/MW75pP53wAtzNPVLPG2b
//Trees - BST in order traversal


// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  // your code goes here

  let original = inputNode.key

  if (inputNode.right) {
    
      inputNode = inputNode.right
    
      while (inputNode.left) {
        
        inputNode = inputNode.left
        
      }
    
  } else if (inputNode.parent) {
    
    //move up the tree until we see a node.val that's bigger that curret
    //console.log(inputNode.parent, inputNode.parent.key)
    while (inputNode.parent && (inputNode.key > inputNode.parent.key)) {
        //console.log('inside while')
        inputNode = inputNode.parent
        
    }
      
    if (inputNode.parent) inputNode = inputNode.parent
    
    if (inputNode.key < original) return null
    
  }

return inputNode

}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {

  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert it
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your 
// findInOrderSuccessor function on. 
BinarySearchTree.prototype.getNodeByKey = function(key) {
  var currentNode = this.root;

  while(currentNode) {
      if(key === currentNode.key) {
          return currentNode;
      }

      if(key < currentNode.key) {
          currentNode = currentNode.left;
      }
      else {
          currentNode = currentNode.right;
      }
  }

  return null;
}

/*********************************************
* Driver program to test above function     *
*********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(25);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if(succ) {
  console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
  console.log("Inorder successor does not exist");
}


/*

Name of peer: Luke
CS background: 5th year SWE 

What can I improve?: 
What did my peer think I can improve?: Was a little slow and took a little bit of prodding to get the second case working, 
but I think that's easily fixed by working with more tree problems and really internalizing what their properties are so solutions come more easily. 
You made one comment that I thought implied you thought we were making changes to the tree that was passed in (But I could've misunderstood your comment). 
Very important to understand that when we're doing something like `inputNode = inputNode.parent` we're not actually changing the tree, we're just updating a reference in the scope of our function. 
If we do something like `inputNode.parent = ...` then we are changing the tree, because we're updating a pointer in the referenced object, but we didn't have to do that in this problem. 

What did I do well?: 
What did peer think I did well?: I think you did a very strong job of communicating throughout. 
Made sure you understood the problem, worked through the examples, and then identified the two primary cases (finding successor in right subtree and finding successor in chain of parents).

*/