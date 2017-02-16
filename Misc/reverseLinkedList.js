/*
Given a linked list, reverse the order. 

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
myList.addToList(1);
myList.addToList(2);
myList.addToList(3);
myList.addToList(4);
myList.addToList(5)
///console.log(myList)

function reverseLinkedList(linkedList) {

	var rev_values = [];

	var node = linkedList.head;

	while(node !== null) {
		rev_values.unshift(node.value);
		node = node.next;
	};
	console.log(rev_values)

	results_list = new LinkedList();

	for(var i = 0; i < rev_values.length; i++) {
		var value = rev_values[i];
		results_list.addToList(value);
	}

	return results_list;
};

//console.log(reverseLinkedList(myList))

function inplaceReverse(linkedList) {

	var currentNode = linkedList.head;
	var nextNode = null;
	var prevNode = null;

	while(currentNode) {
		nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
	};

	linkedList.head = prevNode;
	return linkedList;
};


console.log(inplaceReverse(myList))











