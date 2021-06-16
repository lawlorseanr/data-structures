var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {'length': 0};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function (value) {
  this.storage[this.storage.length] = value;
  this.storage.length += 1;
};

queueMethods.dequeue = function () {
  if (this.storage.length > 0) {
    var removedValue = this.storage[0];
    delete this.storage[0];

    for (var i = 0; i < this.storage.length - 1; i ++) {
      this.storage[i] = this.storage[i + 1];
    }

    this.storage.length -= 1;
    return removedValue;
  }
};

queueMethods.size = function () {
  return this.storage.length;
};


