/*
Remove Dups
Write code to remove duplicates from an unsorted linked list
Followup: 
How would you solve this problem is a temporary buffer is not 
allowed.

1. Define linked list function constructor
2. Define node constructor 

*/

function LinkedList(){
	this.head = null;
};

function Node(value){
	this.value = value;
	this.next = null;
};

//Function to add node 
LinkedList.prototype.addToList = function(value){
	var node = new Node(value);

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

LinkedList.prototype.removeNode = function(value){
	if(this.head.value === value){
		this.head = this.head.next;
		return null;
	};

	var currentNode = this.head.next;
	var previousNode = this.head;
	while(currentNode){
		if(currentNode.value === value){
			previousNode.next = currentNode.next
			return null;
		}
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
};




var myList = new LinkedList();
myList.addToList(1)
myList.addToList(2)
myList.addToList(3)
myList.removeNode(1)

console.log(myList)

//1 the linked list is empty
//2 the linked list has only one value 
//3 the linked list has more than one value 






