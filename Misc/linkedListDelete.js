/*

Delete a single item from a linked list 

*/

var Node = function(value){
	this.value = value;
	this.next = null;
};

nodeA = new Node('1');
nodeB = nodeA.next = new Node('2');
nodeC = nodeB.next = new Node('3');
nodeD = nodeC.next = new Node('4');
nodeE = nodeD.next = new Node('5');


//console.log(nodeA)

Node.prototype.deleteNode = function(value) {

	var currentNode = this;

	while(currentNode) {

		if(currentNode.value === value) {
			currentNode.value = currentNode.next.value;
			currentNode.next = currentNode.next.next;
			return null;
		}
		currentNode = currentNode.next;

	};
	return this
};



console.log(nodeA.deleteNode(2))
console.log(nodeA)

