/*
Implement Queue
It should have the following methods: 

1) add(item) - add an item to the end of the list 
2) remove() - remove the first item in the list
3) peek() - return the top of the queue
4) isEmpty() - return true is and only the queue is empty 

*/

var Queue = function() {
	this.storage = [];
};

Queue.prototype.add = function(item) {
	this.storage.push(item);
};

Queue.prototype.remove = function() {
	return this.storage.shift()
};

Queue.prototype.peek = function() {
	return this.storage[0];
};

Queue.prototype.isEmpty = function(item) {
	if(this.storage.length === 0) {
		return true;
	} else {
		return false;
	};
};




