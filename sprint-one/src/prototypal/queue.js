var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  dequeue: function () {
    var dequeuedItem = this.storage[0];
    delete this.storage[0];
    var currentLengthOfStorage = Object.keys(this.storage).length;
    for (var i = 0; i < currentLengthOfStorage; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[currentLengthOfStorage];
    return dequeuedItem;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};


