//https://leetcode.com/problems/design-circular-queue/


class MyCircularQueue {
  
  constructor(k) {
    
    this.maxSize = k
    this.data = []
    
  }

  enQueue(value) {

    if (this.data.length === this.maxSize) return false
    
    this.data.push(value)
    return true
    
  }
  
  deQueue() {
    
    if (!this.data.length) return false
    
    this.data.shift()
    return true
    
  }
  
  Front() {
    
    return this.data.length ? this.data[0] : -1
    
  }
  
  Rear() {
    
    return this.data.length ? this.data[this.data.length - 1] : -1
    
  }
  
  isEmpty() {
    
    return this.data.length < 1
    
  }
  
  isFull() {
    
    return this.data.length === this.maxSize
    
  }
  
}