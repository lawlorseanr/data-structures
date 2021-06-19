var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.start = 0;
  someInstance.end = 0;
  return someInstance;
};

// Implement the methods below
var stackMethods = {};
stackMethods.push = function(value) {
  this[this.end] = value;
  this.end++;
};
stackMethods.pop = function() {
  if (this.size() > 0) {
    var returnValue = this[this.end - 1];
    this.end--;
    return returnValue;
  }
};
stackMethods.size = function() {
  return this.end - this.start;
};