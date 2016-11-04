/*
Implementa MyQueue class which implements a queue using two 
stacks. 

Methods should include: 

add(item): ok
remove(): ok
peek():
isEmpty(): ok


1. One stack will serve to store the values being queued into 
	 MyQueue. 
2. Items are then popped from the first stack and pushed into 
   the second stack. 
3. At this point the elements have now been reversed, and popping
   from the second stack would remove the first element pushed into 
   the MyQueue - thus it works like a Queue at this point.	 


Stack 1: (element) => [5, 4, 3, 2, 1]

Stack 2: (Stack 1) => push from Stack 1 => [1, 2, 3, 4, 5]

Now, when we pop from Stack 2, it's as if we were dequeueing from 
Stack 1. 


*/

function myQueue(){

	//stack1 will act as the main stack
	this.stack1 = new Stack();
	//stack 2 will be used when removing items
	this.stack2 = new Stack();

};

//==== myQueue FUNCTIONALITY ====//
myQueue.prototype.add = function(value){
	this.stack1.push(value);
};

myQueue.prototype.remove = function(){
	//First check against the queue being empty
	if(this.isEmpty()){
		return null;
	};

	var stack1 = this.stack1;
	var stack1Length = this.stack1.length();
	var stack2 = this.stack2;
	var removed = null;
	var temp = null;

	//switch all elements from stack1 to stack2
	for(var i = 0; i < stack1Length; i++){
		var popped = stack1.pop();
		stack2.push(popped)
	};

	//the oldest value in stack1 is now the top value in stack2
	removed = stack2.pop();

	//return the values from stack2 back to stack1, this time
	//using a while loop...for variety's sake :)
	while(stack2.length()){
		stack1.push(stack2.pop())
	};

	return removed;


};

myQueue.prototype.peek = function(){
	return this.stack1.pop()
};

myQueue.prototype.isEmpty = function(){
	return this.stack1.length() === 0
};

//===== STACK FUNCTIONALITY ====//

function Stack(){
	this.stack = [];
};

Stack.prototype.push = function(value){
	this.stack.push(value);
};

Stack.prototype.pop = function(){
	return this.stack.pop();
};

Stack.prototype.length = function(){
	return this.stack.length;
};

var theQueue = new myQueue();
//theQueue.remove()
// console.log(theQueue.isEmpty());
theQueue.add(1);
theQueue.add(2);
theQueue.add(3);
// console.log(theQueue.isEmpty());
theQueue.remove()
theQueue.remove() //pass!
//theQueue.peek()

console.log(theQueue)









