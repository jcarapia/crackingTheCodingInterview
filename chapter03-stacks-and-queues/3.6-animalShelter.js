/*
Animal Shelter 
An animal shelter, which holds only dogs and cats, operates on a 
strictly "first in-first out" basis. People must adopt either the 
"oldest" (based on arrival time) of all animals at the shelter, or
they can select whether they would prefer a dog or a cat (and will
receive the oldest animal of that type). They cannot select which 
specific animal they would like. Create the data structures to maintain 
this system and implement operations such as enqueue, dequeueAny, 
dequeueDog, dequeueCat. You may use the Linked-List data 
structure. 

1. Create functionality for linked list
2. Each node will have a 'name' and type = 'cat' or 'dog'
3. Since each node will be added to the tail, the animal with 
   longest time at the shelter will be on the head side.

*/

function AnimalQueue(){
	this.listOfAnimals = new LinkedList();
};

AnimalQueue.prototype.enqueue = function(name, type){
	this.listOfAnimals.addToList(name, type);
};

AnimalQueue.prototype.dequeueAny = function(){
	return this.listOfAnimals.removeHead();
};

AnimalQueue.prototype.dequeueDog = function(){
	return this.listOfAnimals.removeNodebyType('dog')
};

AnimalQueue.prototype.dequeueCat = function(){
	return this.listOfAnimals.removeNodebyType('cat')
};


//===Linked list functionality ===//
function LinkedList(){
	this.head = null;
};

function Node(name, type){
	this.name = name; //name of the cat or dog
	this.type = type; //cat or dog
	this.next = null;
};

LinkedList.prototype.addToList = function(name, type){
	var node = new Node(name, type);

	if(this.head === null){
		this.head = node;
	} else {
		currentNode = this.head;
		while(currentNode.next){
			currentNode = currentNode.next; 
		}
		currentNode.next = node;
	}
};

LinkedList.prototype.removeHead = function(){
	var animal = this.head.name;

	this.head = this.head.next;

	return animal;
};

LinkedList.prototype.removeNodebyName = function(name){
	
	if(this.head.name === name){
		this.head = this.head.next;
		return null;
	};

	var currentNode = this.head.next;
	var previousNode = this.head;

	while(currentNode){
		if(currentNode.name === name){
			previousNode.next = currentNode.next
			return null;
		}
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
};

LinkedList.prototype.removeNodebyType = function(type){
	
	if(this.head.type === type){
		var animal = this.head.name;
		this.head = this.head.next;
		return animal;
	};

	var currentNode = this.head.next;
	var previousNode = this.head;

	while(currentNode){
		if(currentNode.type === type){
			var animal = currentNode.name;
			previousNode.next = currentNode.next
			return animal;
		}
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
};
//=================================//

//==Testing Section ===//

// var myList = new LinkedList();
// myList.addToList('bernie', 'cat');
// myList.addToList('henry', 'dog');
// myList.addToList('sammy', 'cat');
// myList.addToList('butch', 'dog');
// //myList.removeNode('bernie')
// console.log(myList)

var myShelter = new AnimalQueue();
myShelter.enqueue('bernie', 'cat');
myShelter.enqueue('henry', 'dog');
myShelter.enqueue('sammy', 'cat');
myShelter.enqueue('butch', 'dog');
//console.log(myShelter.dequeueAny()); //bernie
console.log(myShelter.dequeueCat()); //bernie
console.log(myShelter.dequeueCat()); //bernie

console.log(myShelter);
