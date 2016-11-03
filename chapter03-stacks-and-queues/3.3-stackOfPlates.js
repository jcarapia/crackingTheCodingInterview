/*
Stack of Plates 
Imagine a (literal) stack of plates. If the stack gets too high, 
it might topple. Therefore, in real life we would likely 
start a new stack when the previous stack exceedssome threshold.
Implement a data structure SetofStacks that mimics this. 
SetOfStacks should be composed of several stacks and should 
create a new stack once the previous one exceeds capacity. 
SetOfStacks.push() and SetOfStacks.pop() should behave 
identically to a single stack (that is, pop() should return 
the same values as it would if there were just a single stack).

FOLLOW UP
Implement a function popAt(index) which performs a pop
operation on a specific sub-stack. 
*/

// ======SET-OF-STACKS FUNCTIONALITY ======//

function SetOfStacks(){
	this.threshold = 3; // will hold three stacks since count starts at 0
	this.currentStack = null;
	this.stacks = {};
};

SetOfStacks.prototype.push = function(value){
	
	//if the set of stacks is empty
	if(this.currentStack === null){
	 console.log('hello1')
		this.currentStack = 0;
		var stack = new Stack();
		this.stacks[this.currentStack] = stack;
		this.stacks[this.currentStack].push(value)
		console.log(this.stacks[this.currentStack].length())
		return;	
	};

	//if there are stacks, but the current stack is not full
	if(this.stacks[this.currentStack].length() < this.threshold){
		console.log('hello2')
		this.stacks[this.currentStack].push(value);
		return;
	};

	//if the current stack has reached the threshold, create a new one
	if(this.stacks[this.currentStack].length() === this.threshold){
    console.log('hello3')
		this.currentStack++;
		var stack = new Stack();
		this.stacks[this.currentStack] = stack;
		this.stacks[this.currentStack].push(value)
		return;	
	};
	
};

SetOfStacks.prototype.pop = function(){
	
	var currentStack = this.stacks[this.currentStack];
	var popped = currentStack.pop();
	if(currentStack.length() === 0){
		delete this.stacks[this.currentStack]
		this.currentStack--;
	};
};

//====== INDIVIDUAL STACK FUNCTIONALITY =========//

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
}


var mySet = new SetOfStacks();
mySet.push(1) 
mySet.push(2) 
mySet.push(3) 
mySet.push(4)	
mySet.push(5) 
mySet.push(6)
mySet.push(7)
mySet.pop()
mySet.pop()
mySet.pop()
mySet.pop() //pass
console.log(mySet)




