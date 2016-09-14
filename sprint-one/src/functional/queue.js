var Queue = function() {
  var someInstance = {};
  var queSize = 0;
  var countAdd = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  //ths is the key to the first queued item
  storage.first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //increase que size
    queSize++;
    //create que item
    storage[countAdd] = {data: value, next: undefined};
    if (countAdd > 0) {
      //attatch next of previous que item to this
      storage[countAdd-1].next = countAdd;
    }
    countAdd++;
  };

  someInstance.dequeue = function() {
    if (queSize !== 0) {
      //something
      queSize--;
    }
  };

  someInstance.size = function() {
    return queSize;
  };

  return someInstance;
};
