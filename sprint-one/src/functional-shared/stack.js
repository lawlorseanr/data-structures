var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {storage: {}};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    var lastIndex = Object.keys(this.storage).length;
    this.storage[lastIndex] = value;
  },
  pop: function () {
    var popedItem = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return popedItem;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


