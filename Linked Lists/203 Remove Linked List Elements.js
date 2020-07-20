//https://leetcode.com/problems/remove-linked-list-elements/


//strategy: traverse the list using a clone + dummy node. 
//'fold up' desired values so that they are no longer part of the cloned list
const removeElements = (head, val) => {
  
  //define a clone, set it's next node to the given head
  //this is so that we can start our while loop cleanly for any edge cases
  let clone = new ListNode()
  clone.next = head
  
  //define a node as a copy of the clone, this will be our traversing node
  let dNode = clone
  
  //traverse the list, stop if the node or the next node's value is null. Time = O(n)
  //our last node is already pointing to null since we're working off of a previously constructed list
  //also, we will have 'folded' any target nodes so we will not end on one
  while (dNode && dNode.next) {

    //if the next node's value is equal to the target
    if (dNode.next.val === val) {
      
      //skip the node, and continue. We don't want to traverse so that we can check for multiple ...
      //... targets in a row.
      dNode.next = dNode.next.next
    
    } else dNode = dNode.next
    
  }
  
  //return clone.next (we don't want our validating blank node)
  //total time = O(n)
  return clone.next
  
}
