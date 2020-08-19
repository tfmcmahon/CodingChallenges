//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//Searching and sorting - binary search with a twist

const searchRange = (nums, target) => {
  let bounds = [-1, -1]

  const findBound = (left, right, side) => {
    while (left <= right) {
      let mid = Math.floor((right + left) / 2)

      if (nums[mid] === target) {
        if (
          nums[side === 'rightSide' ? mid + 1 : mid - 1] === undefined ||
          nums[side === 'rightSide' ? mid + 1 : mid - 1] !== target
        ) {
          bounds[side === 'rightSide' ? 1 : 0] = mid
          break
        } else {
          left = side === 'rightSide' ? mid + 1 : left
          right = side === 'rightSide' ? right : mid - 1
        }
      } else if (nums[mid] < target) left = mid + 1
      else right = mid - 1
    }
  }

  findBound(0, nums.length - 1, 'rightSide')
  findBound(0, nums.length - 1, 'leftSide')

  return bounds
}

/*

Name of peer: Eli
CS background: 

What can I improve?: Be really careful with the ternaries. I attempted to simplify the helper but ended up with messy code
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
