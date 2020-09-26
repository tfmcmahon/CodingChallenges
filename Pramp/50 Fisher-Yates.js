//Shuffle an array in place
//sorting and searching

//O(n)
const arrShuffler = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let randomIndex = i + Math.floor(Math.random() * (nums.length - 1 - i))
    let random = nums[randomIndex]

    if (randomIndex !== i) {
      nums[randomIndex] = current
      nums[i] = random
    }
  }

  return nums
}

/*

Name of peer: Marcel
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

the social dilemma

*/
