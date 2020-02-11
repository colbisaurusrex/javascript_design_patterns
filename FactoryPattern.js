/* Factory Pattern */

// TLDR; a Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created
// EVEN BETTER TLDR; Factories are simply functions that create and return objects

function Car(options) {
    this.doors = options.doors || 4
    this.condition = options.condition || 'brand new'
    this.color = options.color || 'silver'
}

function Truck(options) {
    this.state = options.state || 'used'
    this.wheelSize = options.wheelSize || 'large'
    this.color = options.color || 'blue'
}

function VehicleFactory() {}

VehicleFactory.prototype.vehiclClass = Car

VehicleFactory.prototype.createVehicle = function(options) {
    if(options.vehicleType === 'car') {
        this.vehiclClass = Car
    } else {
        this.vehiclClass = Truck
    }
    return new this.vehiclClass(options)
}

var carFactory = new VehicleFactory()

var car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6
})

// console.log(car instanceof Car)

// Approach 1
var movingTruck = carFactory.createVehicle({
    vehicleType: 'truck', // not strictly necessary because carFactory defaults to truck
    state: 'like new',
    color: 'red',
    wheelSize: 'small'
})


// Approach 2
function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory()
TruckFactory.prototype.vehicleClass = Truck

var truckFactory = new TruckFactory()
var myBigTruck = truckFactory.createVehicle({
    state: 'omgg..so bad',
    color: 'pink',
    wheelSize: 'so big'
})


/*
    Notes:
        - This is particularly useful if the object creation process is relatively complex
        - Good
            - for when we need to easily generate different instances of the objects depending on the environment we are in
            - for when we're working many small objects or components that share the same properties
            - when composing objects with instances of other objects that need only satisfy an API contract
        - When applied to the wrong type of problem, it can introduce a lot of complexity
*/