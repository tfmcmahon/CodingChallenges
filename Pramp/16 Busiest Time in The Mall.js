//https://www.pramp.com/challenge/2WBx3Axln1t7JQ2jQq96
//arrays and strings, reading comprehension


const findBusiestPeriod = data => {
  
  let busiest
  let maxPeople = -Infinity
  
  let currentTime = data[0][0]
  let currentPeople = 0
  
  for (let i = 0; i < data.length; i++) {
    
    let [time, people, status] = data[i]
    
    currentPeople += status ? people : -people
    
    if (data[i + 1] && time === data[i + 1][0]) continue

    currentTime = time

    if (currentPeople > maxPeople) {

      busiest = currentTime
      maxPeople = currentPeople

    }
    
  }
  
  return busiest

}


/*

Name of peer: Stanley
CS background: code camp grad and teacher

What can I improve?: off-by-one error
What did my peer think I can improve?: be more confident when checking in with interviewer

What did I do well?: clean code, explained code well
What did peer think I did well?: he was impressed that I stepped through the example carefully, which saved
me from a headache down the road

notes: got along well, connected outside of pramp

*/