//https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5Lg1
//Arrays and strings: tandem loop

//TODO: run code
const meetingPlanner = (slotsA, slotsB, dur) => {
  
  let aPointer = 0
  let bPointer = 0
  
  while (aPointer < slotsA.length && bPointer < slotsB.length) {
    
    let [startA, endA] = slotsA[aPointer]
    let [startB, endB] = slotsB[bPointer]
    
    if (endA - startB >= dur && endB - startA >= dur && endA - startA >= dur && endB - startB >= dur) { 

      let startTime = startA > startB ? startA : startB
      let endTime = startTime + dur

      return [startTime, endTime]

    } else if (endB > endA) {
      
      aPointer++
      
    } else bPointer++
    
  }
  
  //total time = O(n + m)
  return []
  
}

/*

Name of peer: Muhammad
CS background: 11 years as a systems architect

What can I improve?: maybe go faster? mistake on time complexity analysis 
What did my peer think I can improve?: small mistake on time-complexity

What did I do well?: clean code
What did peer think I did well?: clean code

*/