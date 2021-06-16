var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  // Implement the methods below
  //first in first out,
  //in from the back door which is last index
  // out from the front door which is first index

  someInstance.enqueue = function(value) {
    //enqueue(string) - Add a string to the back of the queue
    var indexToBe = Object.keys(someInstance.storage).length;
    someInstance.storage[indexToBe] = value;
  };

  someInstance.dequeue = function() {
    //dequeue() - Remove and return the string at the front of the queue
    var dequeuedItem = someInstance.storage[0];
    delete someInstance.storage[0];
    for (var i = 0; i <= someInstance.storage.length; i++) {
      someInstance.storage[i] = someInstance.storage[ i + 1];
    }

    return dequeuedItem;
  };



  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};


