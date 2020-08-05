//https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5LM1
//sorting and searching

function pancakeSort(arr) { 
  
  for (let i = arr.length - 1; i >= 1; i--) {

    let maxIndex = getMaxIndex(arr, i)

    flip(arr, maxIndex)
    flip(arr, i)
    console.log(arr)
  }
    
  return arr
  
}

const flip = (arr, k) => {

  let pivot = Math.floor((k + 1) / 2)

  for (let i = 0; i < pivot; i++) {

    let temp = arr[i]
    arr[i] = arr[k - i]
    arr[k - i] = temp

  }

}
  
const getMaxIndex = (arr, k) => {

  let index = 0

  for (let i = 1; i <= k; i++) {

    if (arr[i] > arr[index]) {

      index = i

    }

  }

  return index

}

/*

Name of peer: Uday
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/