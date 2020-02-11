/* Prototype Pattern */

// TLDR; pattern that creates objects based on a template of an existing object through cloning

var vehicleProtoType = {
  init: function(carModel) {
    this.model = carModel;
  },

  getModel: function() {
    console.log("The model of this vehicle is..." + this.model);
  }
};

function vehicle(model) {
  function F() {}
  F.prototype = vehicleProtoType;
  var f = new F();

  f.init(model);
  return f;
}

var car = vehicle("Ford Escort");
car.getModel();
