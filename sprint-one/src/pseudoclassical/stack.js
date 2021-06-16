var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {'length': 0};
};

Stack.prototype.push = function (value) {
  this.storage[this.storage.length] = value;
  this.storage.length += 1;
};

Stack.prototype.pop = function () {
  if (this.storage.length > 0) {
    var poppedValue = this.storage[this.storage.length - 1];
    delete this.storage[this.storage.length - 1];

    this.storage.length -= 1;
    return poppedValue;
  }
};

Stack.prototype.size = function () {
  return this.storage.length;
};

var SomeStack = new Stack();