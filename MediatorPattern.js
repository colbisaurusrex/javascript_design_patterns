/* Mediator Pattern */

// TLDR: behavioral design pattern that allows us to expose a unified interfface through which the different parts of a system may communicate

var mediator = (function() {
  var topics = {};

  var subscribe = function(topic, fn) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    topics[topic].push({ context: this, callback: fn });
    return this;
  };

  var publish = function(topic) {
    var args;
    if (!topics[topic]) {
      return false;
    }
    args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, l = topics[topic].length; i < l; i++) {
      var subscription = topics[topic][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  };

  return {
    publish,
    subscribe,
    installTo: function(obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    }
  };
})();

/*
    Notes:
        - promotes loose coupling
            - less of a chance of a domino effect when changes are made
        - reduces channels of communication from many to many to many to one
        - Negatives:
            - single point of failure (I personally am ok with this because I know where to debug)
            - can cause a performance hit as they are always communicating indirectly
*/
