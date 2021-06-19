// functional-shared
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // array containing an array number of subtrees
  // initialize as an empty array
  newTree.children = []; // fix me

  // extend the newTree object with treeMethods object
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// *** i'm not sure why this says "target of a node"***
// takes a value, sets that as the target of a node, and
// adds that node as a child of the tree
treeMethods.addChild = function(value) {
  /*
  create new child with specified value
  add that new child to the current tree Children using this
  */
  this.children.push(Tree(value));

};

// takes any input and returns a boolean reflecting whether
// it can be found as the value of the target node or any
// descendant node
treeMethods.contains = function(target) {
  /*
  if current tree value is target
    return true

  iterate over children
    check if the child value is the target
      if child value is the target value we found the target, so return true

    otherwise recursively call .contains on current child

  if we get this far, the value doesn't exist and return false
  */
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
- addChild:
- contains:
*/