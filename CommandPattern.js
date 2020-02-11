/* Command Pattern */

// TLDR; The general idea behind the Command pattern is that it provides us a means to separate the responsibilities of issuing commands from anything executing commands, delegating this responsibility to different objects instead.

(function() {
  var CarManager = {
    requestInfo: function(model, id) {
      console.log(
        'The information for " + model + " with ID " + id + " is foobar'
      );
    },
    buyVehicle: function(model, id) {
      return "You have successfully purchased Item " + id + ", a " + model;
    },
    arrangeViewing: function(model, id) {
      return (
        "You have successfully booked a viewing of " +
        model +
        " ( " +
        id +
        " ) "
      );
    }
  };
})();

/*
    Notes:
        - Negatives:
            - For example, imagine if the core API behind the CarManager changed. This would re- quire all objects directly accessing these methods within our application to also be modifie
            - This could be viewed as a layer of coupling, which effectively goes against the OOP methodology of loosely coupling objects as much as possible
*/

/* Improved */

CarManager.exectute = function(name) {
  return (
    CarManager[name] &&
    CarManager[name].apply(CarManager, [].slice.call(arguments, 1))
  );
};

CarManager.exectute("arrangeViewing", "Ferrari", "1453");
CarManager.exectute("buyVehicle", "VW Vanagon", "1528");
