/* Decorator Pattern */

// TLDR; Decorators offered the ability to add behavior to existing classes in a system dynamically

// This type of simplistic implementation is functional, but it doesn’t really demonstrate all of the strengths Decorators have to offer.
function vehicle(vehicleType){
    this.vehicleType = vehicleType || "car"
    this.model = "default"
    this.license = "00000-000"
}

var testInstance = new vehicle("car")

var truck = new vehicle("truck")

// new functionality we're decorating vehicle with
truck.setModel = function(modelName) {
    this.model = modelName
}
 
truck.setColor = function(color) {
    this.color = color
}

truck.setModel("CAT")
truck.setColor("blue")

var secondInstance = new vehicle("car")


// Decorating with multiple Decorators
// In the example, our Decorators are overriding the MacBook() superclass ob- ject’s .cost() function to return the current price of the Macbook plus the cost of the upgrade being specified.
MacBook = _ => {
    this.cost = _ => 997
    this.screenSize = _ => 11.6
}

// decorator 1

Memory = macbook => {
    var v = macbook.cost()
    mackbook.cost = _ => v + 75
}

Engraving = macbook => {
    var v = macbook.cost
    macbook.cost = _ => v + 25
}

Insuurance = macbook => {
    var v = macbook.cost
    macbook = _ => v + 250
}

var mb = new MacBook()
Memory(mb)
Engraving(mb)
Insurance(mb)

/*
    Notes:
        - They can be used to modify existing systems where we wish to add additional features to objects without the need to heavily modify the underlying code using them
        - The Decorator pattern isn’t heavily tied to how objects are created but instead focuses on the problem of extending their functionality
        -  Rather than just relying on prototypal inheritance, we work with a single base object and progressively add decorator objects that provide the additional capabilities.
        - Very similar to HOCs
        - Disadvantages:
            - If poorly managed, it can significantly complicate our application architecture, as it introduces many small but similar objects into our namespace. The concern here is that, in addition to becoming hard to manage, other developers unfamiliar with the pattern may have a hard time grasping why it’s being used.

*/