var BinarySearchTree = function(value) {


// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  var node = Object.create(methods);
  node.value = value;
  node.left = undefined;
  node.right = undefined;
  return node;
};

var methods = {
  insert: function(val) {

    // inner function that checks the value and checks the target child 
    // and if the target child is undefined, makes that value the target child
    // and if not, repeat!

    if (val > this.value) {
      (this.right) ? this.right.insert(val) : this.right = BinarySearchTree(val);
    } else {
      (this.left) ? this.left.insert(val) : this.left = BinarySearchTree(val);
    }
  },

  contains: function(val) {

    if (val === this.value) {
      return true;
    } else {
      if (val > this.value) {
        return (this.right) ? this.right.contains(val) : false; 
      } else {
        return (this.left) ? this.left.contains(val) : false; 
      }
    }
  },

  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.right) {
      this.right.depthFirstLog(cb);
    } else if (this.left) {
      this.left.depthFirstLog(cb);
    }

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert: O(log n)
// contains: O(log n)
// depthFirstLog: O(n)



