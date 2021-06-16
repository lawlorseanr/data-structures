var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {'length': 0};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.length] = value;
    storage.length += 1;
  };

  someInstance.pop = function() {
    if (storage.length > 0) {
      var poppedItem = storage[storage.length - 1];
      delete storage[storage.length - 1];
      storage.length -= 1;
      return poppedItem;
    }
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
