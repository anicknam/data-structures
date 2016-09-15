var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};

};

Stack.prototype = {


  constructor: Stack,
  push: function(value) {
    this.storage[this.stackSize]= value;
    this.stackSize++;
  },

  pop: function() {
    if (this.stackSize > 0) {
      var temp = this.storage[this.stackSize - 1]; 
      delete this.storage[this.stackSize - 1];
      this.stackSize--;
      return temp;
    }

  },

  size: function() {
    return this.stackSize;
  }

};


