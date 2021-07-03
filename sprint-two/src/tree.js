// functional-shared
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// *** i'm not sure why this says "target of a node"***
// takes a value, sets that as the target of a node, and
// adds that node as a child of the tree
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// takes any input and returns a boolean reflecting whether
// it can be found as the value of the target node or any
// descendant node
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



/*
Complexity: What is the time complexity of the above functions?
- addChild: constant time O(1)
- contains: linear time O(n)
*/