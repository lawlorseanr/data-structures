var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // use new and this keyword and capitalize the class name
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var indexToBe = Object.keys(this.storage).length;
  this.storage[indexToBe] = value;
};
Queue.prototype.dequeue = function() {
  var dequeuedItem = this.storage[0]; //0:a, 1:b, 2:c
  delete this.storage[0]; // 1:b, 2:c
  for (var i = 0; i < Object.keys(this.storage).length; i++) {
    this.storage[i] = this.storage[i + 1]; //0:b, 1:c, 2:c
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return dequeuedItem;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var queue = new Queue;