//https://leetcode.com/problems/merge-intervals/


const merge = intervals => {
 
  //validate input
  if (!intervals.length) return intervals
  
  //sort the intervals array, either by left value OR right value if they're equal (O(n log(n))
  intervals.sort(([aLeft, aRight], [bLeft, bRight]) => aLeft - bLeft || aRight - bRight)
  
  let merged = []
  //destructure first interval value
  let [focusLeft, focusRight] = intervals[0]
  
  //loop through the intervals array (O(n))
  for (let i = 1; i < intervals.length; i++) {

    let [nextLeft, nextRight] = intervals[i]

    //if the next interval overlaps the focus interval...
    if (focusRight >= nextLeft) {

      //merged the focus interval with the next interval (taking the higher value)
      focusRight = Math.max(focusRight, nextRight)
    } else {

      //if not, push the focus interval and set the focus interval to the next interval
      merged.push([focusLeft, focusRight])
      
      focusLeft = nextLeft 
      focusRight = nextRight
    }
  }
  
  //push the focus after exiting the loop
  merged.push([focusLeft, focusRight])
  
  //O(n * log(n)) total time complexity
  //sort = n * log(n) + loop = n = 2n * log(n) = n * log(n)
  return merged
}