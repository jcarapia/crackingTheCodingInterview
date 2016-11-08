/*
Write a program to sort a stack such that the smallest items
are on top. You can use an additional temporary stack, but you
may not copy the elements into any other data structure (such as
an array). The stack supports the following operations: 
push, pop, peek, isEmpty

Using a helper stack

stack1 = []
stack2 = []


*/

function Stack(){
	this.storage = {};
	this.counter = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.counter] = value;
	this.counter++;
};

Stack.prototype.pop = function() {
	if(!this.isEmpty()){
		var popped = this.storage[--this.counter];
		delete this.storage[this.counter];
		return popped; 
	}
};

Stack.prototype.peek = function() {
	return this.storage[this.counter -1];
};

Stack.prototype.isEmpty = function() {
	return this.counter === 0;
};

Stack.prototype.length = function() {
	return this.counter;
};

function sort(stack) {
	//while stack.length() > 0

	var tempStack = new Stack();
	var length = stack.length();
	var temp = null;

	for(var i =0; i < length; i++){

		tempStack.push(stack.pop())


	};

	return tempStack;
};

//==testing==//

var myStack = new Stack();
myStack.push(6);
myStack.push(7)
myStack.push(8)
myStack.push(9)
myStack.push(10)
//console.log(myStack.pop())
//console.log(myStack.isEmpty())
//console.log(myStack)
console.log(sort(myStack))






