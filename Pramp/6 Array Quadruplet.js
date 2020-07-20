//https://www.pramp.com/challenge/gKQ5zA52mySBOA5GALj9
//sorting and searching


const findArrayQuadruplet = (arr, s) => {
  
  let n = arr.length
  arr.sort((a, b) => a - b)
  
  for (let i = 0; i <= n - 4; i++) {

    for (let j = i + 1; j <= n - 3; j++) {

      let left = j + 1
      let right = n - 1
      let subSum = arr[i] + arr[j]
      let remainder = s - subSum
   
      while (left < right) {

        let range = arr[left] + arr[right]

        if (range === remainder) return [arr[i], arr[j], arr[left], arr[right]]
        else if (range > remainder) right--
        else left++

      }

    }
    
  }
  
  return []
  
}


/*

Name of peer: Erika
CS background: Entry level front-end engineer

What can I improve?: thinking through problem and coming to high level solution on my own
What did my peer think I can improve?: ''

What did I do well?: 
What did peer think I did well?: Communicated well

*/