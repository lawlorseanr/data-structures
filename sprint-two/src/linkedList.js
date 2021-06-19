var LinkedList = function() {
  var list = {};
  list.head = null; // should be a Node instance
  list.tail = null; // should be a Node instance

  // takes a value and adds to the end of the list
  list.addToTail = function(value) {
    if (list.head !== null) {
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }

    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    }
  };

  // removes the first node form the list and returns its value
  list.removeHead = function() {
    if (list.head !== null) {
      var currHead = list.head;
      list.head = list.head.next;

      return currHead.value;
    }
  };

  // returns boolean reflecting whether or not value is in linked list
  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
Complexity: What is the time complexity of the above functions?
- Time complexity is O(n) because of the contains function, which may need to iterate
- over every element
 */
