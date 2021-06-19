
// psuedoclassical style
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objKey = [k, v];
  var existingValue = this._storage.get(index);
  if (existingValue === undefined) {
    existingValue = [];
  }

  var duplicate = false;
  for (var i = 0; i < existingValue.length; i++) {
    if (existingValue[i][0] === k) {
      duplicate = true;
      existingValue[i][1] = v;
    }
  }
  if (!duplicate) {
    existingValue.push(objKey);
  }

  this._storage.set(index, existingValue);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashIndex = this._storage.get(index);
  if (hashIndex === undefined) {
    return hashIndex;
  }

  for (var i = 0; i < hashIndex.length; i++) {
    if (hashIndex[i][0] === k) {
      return hashIndex[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexContents = this._storage.get(index);
  for (var i = 0; i < indexContents.length; i++) {
    if (indexContents[i][0] === k) {
      indexContents.splice(i, 1);
    }
  }
  this._storage.set(index, indexContents);
  /*
  this._storage.each( function(item, i, collection) {
    if (i === index && collection[i] !== undefined) {
      for (var j = 0; j < collection[i].length; j++) {
        if (collection[i][j][0] === k) {
          collection[i].splice(j, 1);
        }
      }
      return collection;
    }
  });
  */

  //this._storage.remove(index);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


