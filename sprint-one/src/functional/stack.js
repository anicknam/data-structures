var Stack = function() {
  var someInstance = {};
  var index = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    index++;
    storage[index - 1] = value;
  };

  someInstance.pop = function() {
    if (index > 0) {
      index--;
      return storage[index];
    }
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
