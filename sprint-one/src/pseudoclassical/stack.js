var Stack = function() {
  this.start = 0;
  this.end = 0;
};

Stack.prototype.push = function(value) {
  this[this.end] = value;
  this.end++;
};
Stack.prototype.pop = function() {
  if (this.size() > 0) {
    var returnValue = this[this.end - 1];
    this.end--;
    return returnValue;
  }
};
Stack.prototype.size = function() {
  return this.end - this.start;
};
