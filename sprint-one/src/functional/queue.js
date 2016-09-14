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
    storage[countAdd] = {data: value, next: undefined};
    if (countAdd > 0) {
      //attatch next of previous que item 
      storage[countAdd-1].next = countAdd;
    }
    countAdd++;
  };

  someInstance.dequeue = function() {
    if (queSize !== 0) {
      //something
      //retrieve my 'popped' item
      var retVal = storage[countLost].data;
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

