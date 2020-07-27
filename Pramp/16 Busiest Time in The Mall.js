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
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/