/*


single level => no elevator
large area of land ->
  -multiple entrances/exit
  -price based on vehicle
  -type of vehicle tries to go into specific parking space type
    -each type of space has a max capacity
    -if it cannot, it will try to go into a bigger 
    -always 1 to 1 vehicle to space
  
pay based on time spent
  -max price?
*/

//https://www.educative.io/courses/grokking-the-object-oriented-design-interview/gxM3gRxmr8Z

class ParkingLot {
  constructor() {}

  admitVehicle(enumVal) {
    //increase our current vehicle type
    //increment currentX
    //keep track of entry time
  }

  dischargeVehicle(enumVal) {
    //const type = VehicleTypes.enumVal
    //type.current && type.current--
    //if type is lt largest possible, look at the next largest type's amount of spaces
  }

  chargeVehicle(type /*, ParkedVehicle.entryTime*/) {
    //charge a rate based on type of vehicle and entry time
    //limited to max amount
  }
}

class VehicleEnums {
  constructor(setOfVehicles) {
    //turns a set of vehicle classes into enums
  }
}

class Vehicle {
  constructor(name, maxSpaces) {
    this.name = name
    this.maxSpaces = maxSpaces
    this.current = 0
  }
}

const Car = new Vehicle('car', 100)

class ParkedVehicle {
  constructor(vehicletype, entryTime) {
    this.entryTime = entryTime
  }
}

/*

Name of peer: 
CS background: 

What can I improve?: 
What did my peer think I can improve?: 

What did I do well?: 
What did peer think I did well?: 

*/
