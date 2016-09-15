var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  //properties of someInstance
  someInstance.stackSize = 0;

  return someInstance;
};


var stackMethods = {

  push: function(value){
    this[this.stackSize - 1] = value;
    this.stackSize++;
  },

  pop: function(){
    if (this.stackSize > 0) {
      this.stackSize--;
      return this[this.stackSize - 1];
    }
  },

  size: function(){
    return this.stackSize;
  }

};





