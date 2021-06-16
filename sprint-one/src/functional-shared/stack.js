var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {'length': 0};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.storage[this.storage.length] = value;
  this.storage.length += 1;
};

stackMethods.pop = function () {
  if (this.storage.length > 0) {
    var poppedItem = this.storage[this.storage.length - 1];
    delete this.storage[this.storage.length - 1];

    this.storage.length -= 1;
    return poppedItem;
  }
};

stackMethods.size = function () {
  return this.storage.length;
};


