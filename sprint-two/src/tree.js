var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childNode = Tree(value);
  this.children.push(childNode);
};

treeMethods.contains = function(target) {
  var foundItem = false;
  var recur = function (currentNodes) {
    if (currentNodes.value === target) {
      foundItem = true;
    }
    for (var i = 0; i < currentNodes.children.length; i++) {
      recur(currentNodes.children[i]);
    }
  };
  recur(this);
  return foundItem;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
