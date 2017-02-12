/*
Implement Stack 
It should have the following methods: 
1) pop() - Remove the top item from the stack 
2) push(item) - Addan item to the top of the stack  
3) peek() - Return the top of the stack 
4) isEmpty() - Return true if an only the stack is empty 
*/

var Stack = function(){
	this.storage = [];
};

Stack.prototype.pop = function() {
	return this.storage.pop();
};

Stack.prototype.push = function(item) {
	this.storage.push(item);
};

Stack.prototype.peek = function(item) {
	return this.storage[this.storage.length - 1];
};

Stack.prototype.isEmpty = function(item) {
	if(this.storage.length === 0) {
		return true;
	} else {
		return false;
	};
};

// var myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// console.log(myStack)
// console.log(myStack.isEmpty())
// console.log(myStack)




