//https://leetcode.com/problems/find-median-from-data-stream/
//binary search insert


//strategy: place the incoming item into the class's data array using binary search to maintain ascending order of elements
class MedianFinder {
    
  constructor() {
    
    this.data = []
    this.even = true

  }
  
  //binary search function
  binarySearch(num, left, right) {
    
    //if the data array is of length one, check if the incoming item is gt the item,
    //if it is return the next index, if it isn't return the index (inser it to the right or the left of the single value)
    if (left === right) return this.data[left] > num ? left : left + 1
    
    //store the mid index
    let mid = Math.floor((right + left) / 2)
    
    //if the mid is lt the incoming item, search again from the mid + 1 to the right
    if (this.data[mid] < num) return this.binarySearch(num, mid + 1, right)
    //if the mid is gt the incoming item, search again from left to mid
    if (this.data[mid] > num) return this.binarySearch(num, left, mid)
    //otherwise we have a match, return the mid index
    return mid
  }
  
  //add an item to the array
  addNum(num) {
    
    //flip the eve/odd indicator each time we add an element
    this.even = !this.even
    
    //if there is no data, add the item
    if (!this.data.length) this.data.push(num)
    else {
     
      //else, perform a binary search to find the index at which to add the item
      let index = this.binarySearch(num, 0, this.data.length - 1)
      
      //splice in the item
      //time = O(log(n))
      this.data.splice(index, 0, num)
      
    }

  }
  
  findMedian() {

    //calculate the mid point of the data array
    let mid = Math.floor(this.data.length / 2)

    //if the data array is even length, return the median of the two middle values, else return the median value
    return this.even ? (this.data[mid] + this.data[mid - 1]) / 2 : this.data[mid]
  }
  
}