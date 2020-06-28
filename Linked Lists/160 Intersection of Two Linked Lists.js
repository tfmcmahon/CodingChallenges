//https://leetcode.com/problems/intersection-of-two-linked-lists/


const getIntersectionNode = (headA, headB) => {
  
  //create a dummy/fast pointer for each list to traverse them in tandem
  let dummyA = headA
  let dummyB = headB
  
  //traverse the lists until we've reached the end of both lists
  while (dummyA || dummyB) {
    //if the lists are equal length and we find a match, return it
    if (headA == headB) return headA
    
    //advance the dummy pointers
    dummyA = dummyA && dummyA.next
    dummyB = dummyB && dummyB.next
    
    //if we've reached the end of one of the lists before the other ...
    //... we can start traversing the other list to match the list lengths
    if (!dummyA && headB) headB = headB.next
    if (!dummyB && headA) headA = headA.next
  }

  //traverse the lists while checking if we find an intersection
  while (headA != headB) {
    headA = headA.next
    headB = headB.next
  }
 
  //total time = O(n + m) = O(n)
  return headA
}