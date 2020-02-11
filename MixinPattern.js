/* Mixin Pattern */

/* TLDR; Mixins ae classes that offer functionality that can easily be inherited bby a sub-class or group off sub-classes fo rthe pupose of function reuse
*/

/* Sub-classes */
var Person = function(fistName, lastName){
    this.fistName = firstName
    this.lastName = lastName
    this.gende = 'male'
}

var clark = new Person("Clark", "Kent")

var SuperHero = function(firstName, lastName, powers){
    Person.call(this, fistName, lastName)
    this.powers = powers
}

SuperHero.prototype = Object.create(Person.prototype)
var superman = new SuperHero("Clark", "Kent", ["flight", "heat-vision"])

/* Notes
    -Sub-classing: term that refers to inheriting propeties for a new object from a base of supeclass object.
        - Objects can be extended to create anothe. Superlclasses and subclasses
        - subclasses are still able to define their own methods, including those that override methods originally defined by its superclass
*/


/* Mixins */

var myMixins = {
    moveUp: function() {
        console.log('move up')
    },
    moveDown: function() {
        console.log('move down')
    },
    stop: function() {
        console.log('stop! in the name of love!')
    }
}

function carAnimator() {
    this.moveLeft = function() {
        console.log('move left')
    }
}

function personAnimator() {
    this.moveRandomly = function(){}
}

// this is underscore
_.extend(carAnimator.prototype, myMixins)
_.extend(personAnimator.prototype, myMixins)


var myAnimator = new carAnimator()
myAnimator.moveLeft()
myAnimator.moveDown()
myAnimator.stop()




var Car = function(settings) {
    this.model = settings.model || "no model provided"
    this.color = settings.color || "no color provided"
}

/* tangent note: this is a function expression */
var Mixin = function() {}

Mixin.prototype = {
    driveForward: () => console.log('drive forward'),
    driveBackward: ()  => console.log('drive backward'),
    driveSideways: () => console.log('drift')
    /* define other methods here */
}


/* tangent note: this is a function declaration */
function augment(receivingClass, givingClass) {
    if(arguments[2]) {
        for(var i = 2, len = arguments.length; i < len; i ++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]]
        }
    } else {
        for (var methodName in givingClass.prototype) {
            if(!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName]
            }
        }
    }
}

augment(Car, Mixin, "driveForwad", "driveBackwad")

var myCar = new Car({
    modle: 'Ford Escort',
    color: 'blue'
})

myCar.driveForward()
myCar.driveBackward()

// We can also augment Car to include all functions from our mixin // by not explicitly listing a selection of them
augment(Car, Mixin)

var mySpotsCar = new Car({
    model: 'Porsche',
    color: 'red'
})

mySpotsCar.driveSideways()

/*
    Notes
        - we can look at inheriting from Mixins as a means of collecting functionality though extension.
        - mixins all objects to borrow (or inherit) functionality from them with a minimal amount of complexity
        - Advantages
            - Where an application is likely to require shared behavior across object instan- ces, we can easily avoid any duplication by maintaining this shared functionality in a Mixin and thus focusing on implementing only the functionality in our system which is truly distinct.
        - Disadvantages
            -  Some developers feel that injecting functionality into an object prototype is a bad idea as it leads to both prototype pollution and a level of uncertainly regarding the origin of our functions. In large systems, this may well be the case.
*/
