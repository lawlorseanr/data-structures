var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.start = 0;
  someInstance.end = 0;
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