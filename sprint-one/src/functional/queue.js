var Queue = function() {
  var someInstance = {};
  var queSize = 0;
  var countAdd = 0;
  var countLost = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //increase que size
    queSize++;
    //create que item
    storage[countAdd] = value;
    countAdd++;
  };

  someInstance.dequeue = function() {
    if (queSize !== 0) {
      //something
      //retrieve my 'popped' item
      var retVal = storage[countLost];
      delete storage[countLost];
      //reduce 'size' of que
      queSize--;
      countLost++;
      return retVal;
    }
  };

  someInstance.size = function() {
    return queSize;
  };

  return someInstance;
};

