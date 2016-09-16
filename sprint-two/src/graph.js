

// Instantiate a new graph
var Graph = function() {
  //properteis of graph
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
    
  } else {
    this.edgeMatrix = [[false]];
  }

};

Graph.prototype.matrixTraverse = function(bool, x, y) {
  //if i'm targeting a specific edge
  if (bool === null) {
    return this.edgeMatrix[x][y];
  } if (y !== undefined) {
    this.edgeMatrix[x][y] = bool;
  } else {
    //makes all (n, x), (x, n) false
    for (var index in this.edgeMatrix) {
      this.edgeMatrix[index][x] = false;
    }
    this.edgeMatrix[x].fill(false);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //iterate through all nodes
  //when we find the target node, return true
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

Graph.prototype.getNodeKey = function(node) {
  for (var key in this.allNodes) {
    if (this.allNodes[key] === node) {
      return key;
    }
  }
  return -1;
};


Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check matrix

  return true === this.matrixTraverse(null, this.getNodeKey(fromNode), this.getNodeKey(toNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.matrixTraverse(true, this.getNodeKey(fromNode), this.getNodeKey(toNode));
  this.matrixTraverse(true, this.getNodeKey(toNode), this.getNodeKey(fromNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.matrixTraverse(false, this.getNodeKey(fromNode), this.getNodeKey(toNode));
  this.matrixTraverse(false, this.getNodeKey(toNode), this.getNodeKey(fromNode));
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
//contains: O(1)
//removeEdge: O(1)
//addEdge: O(1)
//getforEachNode: O(n)
