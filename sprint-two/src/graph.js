

// Instantiate a new graph
var Graph = function() {
  //properties of graph
  this.allNodes = {};
  this.counter = 0;
  this.edgeMatrix = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.allNodes[this.counter] = node;
  this.counter++;
  //add row, column in matrix: 
  if (this.counter > 1) {
    for (var arr of this.edgeMatrix) {
      arr.push(false);
    }
    this.edgeMatrix.push(Array(this.counter));
    //if initial condition, just have a 1x1 matrix of false
  } else {
    this.edgeMatrix = [[false]];
  }

};

Graph.prototype.matrixTraverse = function(bool, x, y) {
  //function 1: see if there is an edge
  if (bool === null) {
    return this.edgeMatrix[x][y];
    //function 2: set the edge
  } if (y !== undefined) {
    this.edgeMatrix[x][y] = bool;
    //function 3: delete a node's edges
  } else {
    for (var index in this.edgeMatrix) {
      this.edgeMatrix[index].splice(x, 1);
    }

    this.edgeMatrix.splice(x, 1);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.getNodeKey(node) >= 0);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //delete key that has the value of node
  var tarKey = this.getNodeKey(node);

  this.matrixTraverse(false, tarKey);
  if (tarKey >= 0) {
    delete this.allNodes[tarKey];
  }
};

//iterate through all nodes
//when we find the target node, return key
//if not found return -1
Graph.prototype.getNodeKey = function(node) {
  for (var key in this.allNodes) {
    if (this.allNodes[key] === node) {
      return key;
    }
  }
  return -1;
};

//check matrix for edge
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    return true === this.matrixTraverse(null, this.getNodeKey(fromNode), this.getNodeKey(toNode));
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.matrixTraverse(true, this.getNodeKey(fromNode), this.getNodeKey(toNode));
    this.matrixTraverse(true, this.getNodeKey(toNode), this.getNodeKey(fromNode));
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.matrixTraverse(false, this.getNodeKey(fromNode), this.getNodeKey(toNode));
    this.matrixTraverse(false, this.getNodeKey(toNode), this.getNodeKey(fromNode));
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.allNodes) {
    cb(this.allNodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//addNode: O(n)
//removeNode: O(n)
//contains: O(n)
//removeEdge: O(n)
//addEdge: O(n)
//getforEachNode: O(n)
