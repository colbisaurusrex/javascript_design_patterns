/* Simple Constructor */

function Trail(location, type, distance) {
  this.location = location;
  this.type = type;
  this.distance = distance;

  this.getLocation = () => `The location is ${this.location}`;
}

/* Usage: */
const coloradoTrail =  Trail("Colorado", "hiking", 400.25);
const appalachianTrail = new Trail("Appalachia", "hiking", 2125.67);

/*
    Notes:
        - Some drawbacks
            - makes inheritance difficult
            - methods are redefined for each new Trail created. All instances should share this method.

*/

/* ------------------------------------------------------------------- */

/* Constructor with Prototypes */

function OtherTrail(location, type, distance) {
  this.location = location;
  this.type = type;
  this.distance = distance;
}

OtherTrail.prototype.getLocation = () => `The location is ${this.location}`;

/* Usage: */

const otherColoradoTrail = new OtherTrail("Colorado", "hiking", 400.25);
const otherAppalachianTrail = new OtherTrail("Appalachia", "hiking", 2125.67);
/*
    Notes:
        - " Note here that we are using Object.prototype.newMethod rather than Object.prototype so as to avoid redefining the prototype object" ---> Look this up
        - every instance now shares a single getLocation method
*/

/* Notes on the "new" keyword, according to MDN

  -The new keyword does the following things:
    1. Creates a blank, plain JavaScript object;
    2. Links (sets the constructor of) this object to another object;
    3. Passes the newly created object from Step 1 as the this context;
    4. Returns this if the function doesn't return its own object.



*/