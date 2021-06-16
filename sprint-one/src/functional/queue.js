var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {'length': 0};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[storage.length] = value;
    storage.length += 1;
  };

  someInstance.dequeue = function() {
    if (storage.length > 0) {
      var dequeuedValue = storage[0];
      delete storage[0];

      for (var i = 0; i < storage.length - 1; i++) {
        storage[i] = storage[i + 1];
      }
      delete storage[i];

      storage.length -= 1;
      return dequeuedValue;
    }
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
