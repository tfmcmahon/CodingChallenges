//https://leetcode.com/problems/add-two-numbers/
//linked list

const sumTwoLists = (list1, list2) => {
  let result = new ListNode()
  let pointer = result
  let remainder = 0

  while (list1 || list2 || remainder) {
    let value1 = list1.val ? list1.val : 0
    let value2 = list2.val ? list2.val : 0

    let subSum = value1 + value2 + remainder
    remainder = 0

    if (subSum > 9) {
      remainder = 1
      subSum -= 10
    }

    pointer.next = new ListNode(subSum)

    pointer.val = subSum

    list1 = list1 ? list1.next : null
    list2 = list2 ? list2.next : null
  }

  return result
}

/*

Name of peer: Andrew
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
