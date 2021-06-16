var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {'length': 0};
};


Queue.prototype.enqueue = function (value) {
  this.storage[this.storage.length] = value;
  this.storage.length += 1;
};

Queue.prototype.dequeue = function () {
  if (this.storage.length > 0) {
    var removedValue = this.storage[0];
    delete this.storage[0];

    for (var i = 0; i < this.storage.length - 1; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[i];

    this.storage.length -= 1;
    return removedValue;
  }
};

Queue.prototype.size = function () {
  return this.storage.length;
};

var SomeQueue = new Queue();