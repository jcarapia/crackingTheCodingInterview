/*
Three in One
Describe how you could use a single array to implement 
three stacks.

1. This problem is more suited to Java than JS. 
 		In Java, the length of an array is established when it 
 		is created and it is fixed. In JS, the length is flexible.
*/

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._storage = {};
  this._start = 0;
  this._end = 0;
  };


Queue.prototype.enqueue = function(value){
  this._storage[this._end] = value;
  this._end++;
};

Queue.prototype.dequeue = function(){
  this.size() && this._start++;
  var result = this._storage[this._start];

  delete this._storage[this._start];

  return result;
};

Queue.prototype.size = function(){
  return this._end - this._start;
};

var myQueue = new Queue();

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(5)

console.log(myQueue);