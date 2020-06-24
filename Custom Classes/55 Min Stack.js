//https://leetcode.com/problems/min-stack/

class MinStack {
  constructor() {
    this.stack = []
    this.min = []
  }
  
  push(x) {
    this.stack.push(x)
    if (!this.min.length || x <= this.min[this.min.length - 1]) this.min.push(x)
  }
  
  pop() {
    if (this.top() === this.min[this.min.length - 1]) this.min.pop()
    this.stack.pop()
  }
  
  top() {
    return this.stack[this.stack.length - 1]
  }
  
  getMin() {
    return this.min[this.min.length - 1]
  }
  
}