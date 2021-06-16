var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {'length': 0};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage.length += 1;
    storage[storage.length] = value;
  };

  someInstance.dequeue = function() {
    var dequeuedValue = storage[0];
    delete storage[0];
    storage.length -= 1;
    return storage[0];
  };

  someInstance.size = function() {
    return storage.lenght;
  };

  return someInstance;
};
