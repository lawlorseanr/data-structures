var Set = function() {
  var set = Object.create(setPrototype);

  // set the _storage value to an empty array
  // refactored to object
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

// takes any string and adds it to the set
setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = null;
  }
};


// method, takes any string and returns a boolean
// reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  return this._storage[item] === null;
};

// method, takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
Complexity: What is the time complexity of the above functions?

*/
