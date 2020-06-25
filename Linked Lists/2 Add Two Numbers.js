//https://leetcode.com/problems/add-two-numbers/


const addTwoNumbers = (l1, l2) => {

  //initialize a new linked list and a dummy node to modify it, also addition remainder storage
  let head = new ListNode(0)
  let tail = head
  let remainder = 0
  
  //iterate while there are values in either list or a remainder
  while (l1 || l2 || remainder) {
    //initialize the values from each list, if one list is null, use 0
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    //calculate the sum
    let sum = val1 + val2 + remainder
    
    //attach a new node to the list with the 1s place value
    tail.next = new ListNode(sum % 10)
    tail = tail.next
    //calculate the remainder
    remainder = Math.floor(sum / 10)
    
    //if either listnode has more digits, traverse forward
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
      
  }
  
  return head.next
}