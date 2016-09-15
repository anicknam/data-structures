var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  //properties of someInstance
  //someInstance.storage = {};
  someInstance.stackSize = 0;


  //add methods from stackMethods
  extend(someInstance, stackMethods);

  return someInstance;
};

//extend the methods from the 'from' obj to 'to' obj
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {



  push: function(value){
    this[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function(){
     
    return this[this.stackSize];
  },

  size: function(){
    return this.stackSize;
  }

};


