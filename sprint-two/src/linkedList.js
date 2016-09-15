var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
    } 
  };

  list.contains = function(target) {
    var currNode = list.head;
    while (currNode) {
      
      if (target === currNode.value) {
        return true;
      } else {
        currNode = currNode.next;
      }

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
 * Complexity: What is the time complexity of the above functions?
 */
