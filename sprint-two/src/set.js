var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

//set is an Object.keys[] gather all the keys in a
var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var keys in this._storage) {
    if (keys === item) {
      return true;
    }
  }
  return false;
};

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
 * Complexity: What is the time complexity of the above functions?
 */
