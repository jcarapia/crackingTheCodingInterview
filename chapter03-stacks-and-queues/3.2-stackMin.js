/*
Stack Min
How would you design a stack, which in addition to push and pop, 
has a function min, which returns the minimum element?
Push, pop, and min should all operate in O(1) time. 

1. Define a Stack function constructor with a minimum value
	variable.
2. When a value is added to the stack, check if the new
		value is smaller than the current min. If so, assign 
		to min.
3. When a value is removed, if it is the min, iterate through 
	 the stack to find the current min. 
4. Thus, the function to return the minimum valus is done in 
		O(1) time. 
*/


function Stack(){
	this.stack = [];
	this.min = Infinity;
};

Stack.prototype.push = function(value){
	this.stack.push(value);
	if(value < this.min){
		this.min = value;
	};
};

Stack.prototype.pop = function(){
	var popped = this.stack.pop();
		if(this.stack.min = popped){
			var newMin = this.stack[0];	
			for(var i =1; i < this.stack.length -1; i++){
				if(this.stack[i] <= newMin){
					newMin = this.stack[i];
				};
			};
			this.stack.min = newMin
		}
	return popped;
};

Stack.prototype.minimum = function(){
	if(this.min !== Infinity){
		return this.min;
	} else {
		return 'the stack is empty';
	}
};

var myStack = new Stack()
myStack.push(10);
myStack.push(12);
myStack.push(13);
myStack.push(4);
myStack.push(11);
myStack.pop();
console.log(myStack) //pass!

