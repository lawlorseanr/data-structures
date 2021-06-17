var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  someInstance.enqueue = function(value) {
    var indexToBe = Object.keys(someInstance.storage).length;
    someInstance.storage[indexToBe] = value;
  };

  someInstance.dequeue = function() {
    var dequeuedItem = someInstance.storage[0];
    delete someInstance.storage[0];
    var currentLength = Object.keys(someInstance.storage).length;

    for (var i = 0; i <= currentLength; i++) {
      someInstance.storage[i] = someInstance.storage[ i + 1];
    }
    delete someInstance.storage[currentLength];
    return dequeuedItem;
  };



  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};

