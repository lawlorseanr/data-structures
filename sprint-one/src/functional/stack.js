var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var start = 0;
  var end = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[end] = value;
    end++;
  };

  someInstance.pop = function() {
    if (someInstance.size() > 0) {
      var returnValue = someInstance[end - 1];
      delete someInstance[end - 1];
      end--;
      return returnValue;
    }
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
