var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

//set is an Object.keys[] gather all the keys in a
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

setPrototype.has = function (item) {
  if (this._storage.length !== 0) {
    for (var keys in this._storage) {
      if (this._storage[keys] === item) {
        return true;
      }
    }
  }
  return false;
};

setPrototype.size = function () {
  return Object.keys(this._storage).length;
};
/*
Complexity: What is the time complexity of the above functions?

*/
