var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var num = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[num] = value;
    num++;
  };

  someInstance.pop = function() {
    var IndexOflastIn = Object.keys(someInstance.storage).length - 1;
    var popedItem = someInstance.storage[IndexOflastIn];
    delete someInstance.storage[IndexOflastIn];
    num--;
    return popedItem;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};

