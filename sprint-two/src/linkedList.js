var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if empty, means head and tail is null
    // change head pointer to node pass in value, same for tail
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      list.tail = Node(value);
      list.head.next = Node(value);
      list.tail.next = null;
    }
  };

  list.removeHead = function() {
    var removedNodeValue = list.head.value;
    list.head = list.head.next;
    return removedNodeValue;

  };

  list.contains = function(target) {
    var recur = function(currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.next !== null) {
        return recur(currentNode.next);
      }
      return false;
    };
    return recur(list.head);
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
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1);
 removeHead: O(1);
 contains: O(n);

 */
