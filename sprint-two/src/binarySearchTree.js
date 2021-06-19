// psuedoclassical style
var BinarySearchTree = function(value) {

  // property, holds the value of the BST
  this.value = value;

  // property, a binary search tree (BST) where all values are lower than the current value.
  this.left = null;

  // property, a BST where all values are higher than the current value.
  this.right = null;
};

// method, which accepts a value and places it in the tree in the correct position.
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else if (this.left !== null) {
      this.left.insert(value);
    }
  }

  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else if (this.right !== null) {
      this.right.insert(value);
    }
  }
};

// method, which accepts a value and returns a boolean reflecting
// whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }

  if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }

  if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }

};

// method, which accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function (callback) {
  callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
