var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  //properites of someInstance
  someInstance.queSize = 0;
  someInstance.countAdd = 0;
  someInstance.countLost = 0;
  someInstance.storage = {};

  extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {

  enqueue: function(val) {
    this.queSize++;
    this.storage[this.countAdd] = val;
    this.countAdd++;
  },

  dequeue: function() {
    if (this.queSize > 0) {
      var retVal = this.storage[this.countLost];
      delete this.storage[this.countLost];
      this.queSize--;
      this.countLost++;
      return retVal;
    }
  },

  size: function(){
    return this.queSize;
  }
};


