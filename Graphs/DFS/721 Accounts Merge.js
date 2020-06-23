//https://leetcode.com/problems/accounts-merge/
//DFS and/or union find

const accountsMerge = accounts => {
  
  //create adjacency lists of the names to email and emails to eachother
  let emailList = new Map()
  let nameList = new Map()
  
  //iterate through the accounts
  for (let [name, ...emails] of accounts) {
    //the 0th email will be the connection point between the account holder's name and each email
    nameList.set(emails[0], name)
    
    //build the email adjacency list, using the 0th email as an anchor
    for (let email of emails) {
      if (!emailList.has(emails[0])) emailList.set(emails[0], new Set())
      if (!emailList.has(email)) emailList.set(email, new Set())
      
      emailList.get(emails[0]).add(email)
      emailList.get(email).add(emails[0])
    }
  }

  //initialize an output list and a visited set
  let list = []
  let visited = new Set()
  
  //loop through all of the keys in the adjacency list
  for (let email of emailList.keys()) {
    //if we have not visited an email node, start DFS
    if (!visited.has(email)) {
      //add the email to the visited list and initialize a stack and an account to store the results
      visited.add(email)
      let stack = [email]
      let account = [email]
      
      //iterate through the stack
      while (stack.length) {
        let node = stack.pop()
        
        //iterate through the adjacent nodes to the current node
        for (let adj of emailList.get(node)) {
          //if we haven't visited it, add it to the stack, account, and visited lists
          if (!visited.has(adj)) {
            visited.add(adj)
            stack.push(adj)
            account.push(adj)
          }
        }
      }
      //sort the account (per problem stipulation)
      account.sort()
      //add the name to the front of the account array
      account.unshift(nameList.get(email))
      //push the account to the result array
      list.push(account)
    }
  }
  
  return list
}