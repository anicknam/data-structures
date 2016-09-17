

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// HashTable.prototype.initiate = function(){
//   this._storage.each()
// }

HashTable.prototype.node = function (k, v) {
  //tri-tuple
  var node = LimitedArray(3);
  node.set(0, k);
  node.set(1, v);
  return node;
};

HashTable.prototype.nodeAttached = function(node1, node2) {
  //change the 'next' val of node1 to node2
  node1.set(2, node2);
};

HashTable.prototype.findNode = function(node, k) {
  //iterate through linked node list
  if (node === undefined) {
    return undefined;
  }
  var end = false;
  while(!end) {
    if (node.get(0) === k) {
      //if found return value of node
      return node;
    }
    if (node.get(2) === undefined) {
      end = true;
    } else {
      node = node.get(2);
    }
  }
  //return undef if we reach end without finding node
  return undefined;
};

HashTable.prototype.reHash = function() {
  //change limit
  //put storage in temp
  //iniate new storag
  //put info from temp to new storage
};


HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  // if we already have sth in that buket, call nodeAttached on last node in that buket
  var bucket = this._storage.get(index);
  if (bucket) {
    var foundNode = this.findNode(bucket, k);
    //if there already is a node with that key
    if (foundNode) {
      //update current value of found node with v
      foundNode.set(1, v);
    } else {
      //if there isn't a node here with that key
      //generate a new node, set bucket to that node
      //set next of new node to current linked node list
      var newNode = this.node(k, v);
      this.nodeAttached(newNode, this._storage.get(index));
      this._storage.set(index, newNode);
    }
  } else {
    //if we don't have something in the buket
    //initialize buket with node
    var newNode = this.node(k, v);
    this._storage.set(index, this.node(k, v));
    console.log(newNode.get(0), newNode.get(1), newNode.get(2));
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var firstNode = this._storage.get(index);
  var foundNode = this.findNode(firstNode, k);
  return (foundNode ? foundNode.get(1) : undefined);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //remove should remove that node inside linked list at index for that key
  var firstNode = this._storage.get(index);
  var prevNode;
  var end = false;
  while (!end) {
    //if the firstNode's key matches
    if (firstNode.get(0) === k) {
      //if there's no previous node
      if (prevNode === undefined) {
        //empty this bucket
        this._storage.set(index, undefined);
        end = true;
      } else {
        //if there's a previous node
        //make the previous node's next point to the next next node
        prevNode.set(2, firstNode.get(2));
        end = true;
      }
    }
    //if the firsNode's key does not match
    if (firstNode.get(2) === undefined) {
      //if we are at the end of the linked list
      end = true;
    } else {
      //not at end of list. move pn fn pointers down one
      prevNode = firstNode;
      firstNode = firstNode.get(2);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 //insert: O(n)
 //retrieve: O(n)
 //remove: O(n)

