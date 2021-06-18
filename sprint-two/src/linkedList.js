var LinkedList = function() {
  var list = {};
  list.head = null; // should be a Node instance
  list.tail = null; // should be a Node instance

  // takes a value and adds to the end of the list
  list.addToTail = function(value) {
    /*
    if head
      set tail.next to new node
      then set list.tail to same new node

    if no head
      set head equal to Node(value)
      then set tail to head
    */
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
    /*
    if list head doesn't equal null
      save current head value
      set list head to head.next

      return saved head value
    */
    if (list.head !== null) {
      var currHead = list.head;
      list.head = list.head.next;

      return currHead.value;
    }
  };

  // returns boolean reflecting whether or not value is in linked list
  list.contains = function(target) {
    /*
    initialize return value as negative 1
    if head exists
      set current node to head
      set found to current node . value equal to target

      while not found and current node . next does not equal null
        check if current node value equals target
          if current node value equals target, return boolean
    */

    found = false;
    if (list.head !== undefined) {

      var currentNode = list.head;
      while (!found) {
        if (currentNode.value === target) {
          found = true;
        }

        currentNode = currentNode.next;

        if (currentNode === null) {
          break;
        }
      }
      return found;

    }


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
