// Instantiate a new graph pseudoclassical style
var Graph = function() {
  /*
  create a storage object for the Graph instantiation
  */
  this._storage = {};
};

// method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(node) {
  this._storage[node] = [];
};

// method that takes any node and returns a boolean reflecting whether it can be found in the graph
Graph.prototype.contains = function(node) {
  var stringNode = node.toString();

  for (var key in this._storage) {
    if (key === stringNode) {
      return true;
    }
  }
  return false;
};

// method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
  var childNodes = this._storage[node];
  delete this._storage[node];

  for (var i = 0; i < childNodes.length; i++) {
    var nodeIndexInChild = this._storage[childNodes[i]].indexOf(node);
    this._storage[childNodes[i]].splice(nodeIndexInChild, 1);
  }
};

// method that returns a boolean reflecting whether or not two nodes are connected
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this._storage[fromNode].indexOf(toNode) >= 0;
};

// method that creates a edge (connection) between two nodes if they both are present within the graph
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this._storage[fromNode] !== undefined && this._storage[toNode] !== undefined) {
    this._storage[fromNode].push(toNode);
    this._storage[toNode].push(fromNode);
  }
};

// method that removes the connection between two nodes
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var findTo = this._storage[fromNode].indexOf(toNode);
  var findFrom = this._storage[toNode].indexOf(fromNode);

  if (findTo >= 0 && findFrom >= 0) {
    this._storage[fromNode].splice(findTo, 1);
    this._storage[toNode].splice(findFrom, 1);
  }
};

// method that traverses through the graph, calling a passed in function once on each node
Graph.prototype.forEachNode = function(cb) {
  for (var key in this._storage) {
    cb(key);
  }
};

/*
Complexity: What is the time complexity of the above functions?

*/


