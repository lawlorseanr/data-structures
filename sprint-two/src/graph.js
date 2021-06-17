// Instantiate a new graph pseudoclassical style
var Graph = function() {
  /*
  create a storage object for the Graph instantiation
  */
};

// method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(node) {
  /*
  create a new key in the _storage object with empty array for no edges
  */
};

// method that takes any node and returns a boolean reflecting whether it can be found in the graph
Graph.prototype.contains = function(node) {
  /*
  iterate through keys in object
    if key value equals node, return true

  return false if the node wasn't found
  */
};

// method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
  /*
    remove the specified node
    remove the edge connection from other nodes that were connected to the specified node
      could we use hasEdge?
  */
};

// method that returns a boolean reflecting whether or not two nodes are connected
Graph.prototype.hasEdge = function(fromNode, toNode) {
  /*
    check if fromNode value array contains toNode value
  */
};

// method that creates a edge (connection) between two nodes if they both are present within the graph
Graph.prototype.addEdge = function(fromNode, toNode) {
  /*
    check if both nodes are present in graph
      add toNode to the fromNode value array
      add fromNode to the toNode value array
      (do we need to check if the edge already exists?)
  */
};

// method that removes the connection between two nodes
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /*
    (does this need to check if the two nodes exist?)
    remove toNode from the value array of fromNode
    remove fromNode from the value array of toNode
  */
};

// method that traverses through the graph, calling a passed in function once on each node
Graph.prototype.forEachNode = function(cb) {
  /*
    iterate through all nodes in the object and call the function on the node
  */
};

/*
Complexity: What is the time complexity of the above functions?

*/


