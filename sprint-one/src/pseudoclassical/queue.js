var Queue = function() {
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    var startValue = this[this.start];
    delete this[this.start];
    this.start++;
    return startValue;
  }
};

Queue.prototype.size = function() {
  return this.end - this.start;
};