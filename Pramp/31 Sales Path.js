//https://www.pramp.com/challenge/15oxrQx6LjtQj9JK9XqA
//DFS with custom tree


function getCheapestCost(rootNode) {
  
  let stack = []
  let minVal = Infinity //result variable
  
  rootNode && stack.push([rootNode, 0])
  
  while (stack.length) {
    
    let [node, localSum] = stack.pop()
    
    if (node.children.length) {
    
      for (let child of node.children) {

        stack.push([child, localSum + child.cost]) // continue populating stack and update cost

      }
    
    } else {
      
      //if we have no children, we are at a leaf; we need to check if we have a new minVal
      minVal = Math.min(localSum, minVal)
      
    }
    
  }
  
  return minVal
  
}

// Constructor to create a new Node
class Node {
  constructor(cost){
    this.cost = cost;
    this.children = [];
  }
}

let tree = new Node(0)

let childLevel11 = new Node(5)
let childLevel12 = new Node(3)
let childLevel13 = new Node(6)

let childLevel21 = new Node(4)
let childLevel22 = new Node(2)
let childLevel23 = new Node(0)
let childLevel24 = new Node(1)
let childLevel25 = new Node(5)

let childLevel31 = new Node(1)
let childLevel32 = new Node(10)

let childLevel41 = new Node(1)


tree.children = [childLevel11, childLevel12, childLevel13]

childLevel11.children = [childLevel21]
childLevel12.children = [childLevel22, childLevel23]
childLevel13.children = [childLevel24, childLevel25]

childLevel22.children = [childLevel31]
childLevel23.children = [childLevel32]

childLevel31.children = [childLevel41]

console.log(getCheapestCost(tree), 'expect: 7')

/*

Name of peer: ganga
CS background: code camp grad

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/