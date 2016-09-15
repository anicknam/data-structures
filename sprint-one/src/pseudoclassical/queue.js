var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.countAdd = 0;
  this.countLost = 0;
  this.storage = {};
};


Queue.prototype = {

  constructor: Queue,

  enqueue: function(value){
    this.storage[this.countAdd] = value;
    this.countAdd++;
  },

  dequeue: function(){
    if (this.countAdd - this.countLost > 0) {
      var temp = this.storage[this.countLost];
      delete this.storage[this.countLost];
      this.countLost++;
      return temp;
    }

  },

  size: function(){
    return this.countAdd - this.countLost;

  }

};



