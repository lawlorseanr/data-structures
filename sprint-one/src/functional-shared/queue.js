var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.start = 0;
  someInstance.end = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

// Implement the methods below
var queueMethods = {};
queueMethods.enqueue = function(value) {
  this[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var startValue = this[this.start];
    delete this[this.start];
    this.start++;
    return startValue;
  }
};

queueMethods.size = function() {
  return this.end - this.start;
};