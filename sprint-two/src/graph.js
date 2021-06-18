

// Instantiate a new graph
var Graph = function() {
  this.vertex = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertex[node] = [];
  this.vertex[node].push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var foundItem = false;
  for (var nodes in this.vertex) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] === node.toString()) {
        foundItem = true;
      }
    }
  }
  return foundItem;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertex[node];
  for (var keys in this.vertex) {
    var edges = this.vertex[keys];
    if (edges.indexOf(node) > 0) {
      edges.splice(edges.indexOf(node), 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.vertex[fromNode]) {
    for (var i = 0; i < this.vertex[fromNode].length; i++) {
      if (this.vertex[fromNode][i] === toNode) {
        return true;
      }
    }
  }
  if (this.vertex[toNode]) {
    for (var i = 0; i < this.vertex[toNode].length; i++) {
      if (this.vertex[toNode][i] === fromNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.vertex[fromNode] !== undefined && this.vertex[fromNode] !== undefined) {

    this.vertex[fromNode].push(toNode);
  }

  this.vertex[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexOftoNode = this.vertex[fromNode].indexOf(toNode);
  this.vertex[fromNode].splice(indexOftoNode, 1);
  var indexOfFromNode = this.vertex[toNode].indexOf(fromNode);
  this.vertex[toNode].splice(indexOfFromNode, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var keys in this.vertex) {
    var currentNode = this.vertex[keys];
    cb(currentNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


