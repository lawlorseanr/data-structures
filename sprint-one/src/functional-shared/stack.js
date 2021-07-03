var Stack = function() {
  var someInstance = {};
  someInstance.start = 0;
  someInstance.end = 0;

  _.extend(someInstance, sharedMethods);
  return someInstance;
};

// Implement the methods below
var sharedMethods = {};
sharedMethods.push = function(value) {
  this[this.end] = value;
  this.end++;
};

sharedMethods.pop = function() {
  if (this.size() > 0) {
    var returnValue = this[this.end - 1];
    delete this[this.end - 1];
    this.end--;
    return returnValue;
  }
};

sharedMethods.size = function() {
  return this.end - this.start;
};