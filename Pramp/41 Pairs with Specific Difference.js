//https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnpZ
//secondary data structure to save time

function findPairsWithGivenDifference(arr, k) {
  const mySet = new Set(arr)
  const pairs = []

  for (let num of arr) {
    let x = num + k

    mySet.has(x) && pairs.push([x, num])
  }

  return pairs
}

/*

Name of peer: Francisco
CS background: senior engineer

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
