

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  var tuple = {};
  tuple[k] = v;
  this._storage.get(index).push(tuple);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var searchingValue;
  var valueSearch = function (valuesInStorage) {
    if (valuesInStorage !== undefined) {
      for (var i = 0; i < valuesInStorage.length; i++) {
        if (Object.keys(valuesInStorage[i])[0] === k) {
          searchingValue = valuesInStorage[i][k];
        }
      }
    }
  };
  this._storage.each(valueSearch);
  return searchingValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

