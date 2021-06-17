var Queue = function() {
  var someInstance = {storage: {}};
  _.extend(someInstance, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var indexToBe = Object.keys(this.storage).length;
    this.storage[indexToBe] = value;
  },
  dequeue: function() {
    var dequeuedItem = this.storage[0];
    delete this.storage[0];
    for (var i = 0; i < Object.keys(this.storage).length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[Object.keys(this.storage).length - 1];

    return dequeuedItem;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }

};


