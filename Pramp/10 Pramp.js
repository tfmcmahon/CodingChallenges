//https://www.pramp.com/challenge/aK6V5GVZ9MSPqvG1vwQp
//space optimization

const getDifferentNumber = arr => {
  
  let set = new Set([...arr])
  
  for (let i = 0; i < arr.length; i++) {
    
    if (!set.has(i)) return i
    
  }
    
  return arr.length
  
}

/*

Name of peer: Ahsan
CS background: 2nd year SWE

What can I improve?: don't over complicate the problem, read problem more carefully.
What did my peer think I can improve?: 

What did I do well?: Clean code
What did peer think I did well?: 

*/