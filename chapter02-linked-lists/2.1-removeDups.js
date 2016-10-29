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
myList.addToList(4)
myList.addToList(5)
//myList.removeNode(1)

//console.log(myList)

function removeDupes(linkedList) {
	var nodeValues = {};
	var currentNode = linkedList.head;
	while(currentNode){
		nodeValues[currentNode.value] = (currentNode.value);
		currentNode = currentNode.next;
	};

	var tempList = new LinkedList();

	for(var key in nodeValues){
		tempList.addToList(nodeValues[key]);
	};

	return tempList;
};

//This function creates a new list without dupes. The old list 
//can be reassigned to this list if replacement is required. 

//console.log(removeDupes(myList));

//===============================
function returnKthToLast (linkedList, k){
	var counter1 = 0; //length of linked list
	var counter2 = 0;	//position kth from last node
	var resultNode = linkedList.head;

	var currentNode = linkedList.head;

	while(currentNode){
		counter1++;
		currentNode = currentNode.next;
	};

	counter2 = counter1 - k;
	

	while(counter2 > 1){
		resultNode = resultNode.next;
		counter2--;
	};

	return resultNode;
};

console.log(returnKthToLast(myList, 1))






