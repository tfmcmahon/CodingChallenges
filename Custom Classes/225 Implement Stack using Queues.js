//https://leetcode.com/problems/implement-stack-using-queues/
//implement a stack

class MyStack {
 
  constructor() {
    //initialize data storage as a queue (per problem stipulations)
    this.queue = []
  }
  
  push(x) {
    //push an item to the queue (standard functionality)
    //total time = O(1)
    this.queue.push(x)
  }
  
  pop() {
    //initialize a temp queue to hold onto the data while we iterate through the queue with shift
    //space = O(n)
    let temp = []
    let popped
    
    //iterate through the queue, time = O(n)
    while (this.queue.length > 1) {
      //shift the first value from the queue and add it to the temp array
      //stop when we get to the last item since we want to remove it
      temp.push(this.queue.shift())
    }
    
    //store the popped item so that we can return it
    if (this.queue.length) popped = this.queue.shift()
    
    //rewrite the temp array back onto the queue with the last item removed
    this.queue = temp

    //total time and space = O(n)
    return popped
  }
  
  top() {
    
    //similar to pop() except we're not remove the last item
    let temp = []
    let onTop
    
    while (this.queue.length) {
      
      if (this.queue.length === 1) onTop = this.queue[0]
      
      temp.push(this.queue.shift()) 
    }
        
    this.queue = temp

    //total time and space = O(n)
    return onTop     
  }
  
  empty() {

    //check if there is any data in the queue
    //total time = O(1)
    return this.queue.length ? false : true
  }
}