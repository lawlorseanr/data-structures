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
  /*
    add the item to the end of hte array
   */
  if (this._storage[item] === undefined) {
    this._storage[item] = null;
  }
};


// method, takes any string and returns a boolean
// reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  /*
    iterate through the array
      if the current index equals the item
        found it, return true

    if we get to thsi point, it isn't in the array, return false
   */
  return this._storage[item] === null;
};

// method, takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  /*
    iterate through the array
      if the current index equals the item
        if not the very last index of the array
          set current index equal to next index

        if the very last index of the array
          remove the last index of the array
   */
  delete this._storage[item];
};

/*
Complexity: What is the time complexity of the above functions?

*/
