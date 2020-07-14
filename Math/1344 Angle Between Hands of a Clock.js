//https://leetcode.com/problems/angle-between-hands-of-a-clock/
//angle calculations/logic


//strategy: calculate the hour and minute angles, get the angle between them from the difference.
//if the result is over 180 degrees, subtract the angle from 360 to get the acute version
const angleClock = (hour, minutes) => {
  
  //convert hour number. If it's 12 oclock, we are starting at 0
  hour = hour == 12 ? 0 : hour

  //calculate hour angle. Each hour is 1/12th of the clock face.
  //add the number of minutes, which is 1/12th of the clock face * the percentage of minutes out of 60
  let hourAngle = (((1 / 12) * 360) * hour ) + (((1 / 12) * 360) * (minutes / 60))
  //calculate the minute angle, multiply the percentage of minutes out of 60 times the clock face
  let minutesAngle = 360 * (minutes / 60)

  //calculate the angle between the hands
  let angle = Math.abs(hourAngle - minutesAngle)

  //check for an obtuse angle, if so, subtract from 360 to get the acute version.
  return (angle > 180) ? (360 - angle) : angle
  
}