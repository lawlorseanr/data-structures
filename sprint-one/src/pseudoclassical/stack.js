var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // use new and this keyword and capitalize the class name
  this.storage = {};
};

Stack.prototype.push = function (value) {
  var indexToBe = Object.keys(this.storage).length;
  this.storage[indexToBe] = value;
};
Stack.prototype.pop = function() {
  var popedItem = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return popedItem;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var stack = new Stack;