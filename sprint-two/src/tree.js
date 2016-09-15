var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
// create a child (that is also a tree)
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  var hasFound = false;
  //search through all values in tree
  var searchTree = function(child) {
  //if newTree.value === target return it

    if (child.value === target) {
      hasFound = true;
    } else if (child.children.length > 0) {
      _.each(child.children, function(grandChild) {
        searchTree(grandChild);
      });
    }
  };
  //start search from root
  searchTree(this);
  return hasFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//addChild: O(1)
//contains: O(n)