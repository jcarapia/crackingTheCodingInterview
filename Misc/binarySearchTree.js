/*

Implement BST 
It should have the following methods: 
1) insert 
2) contains
3) depthFirstLog
*/

var BinarySearchTree = function(value){
	this.value = value;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
	if(value < this.value && this.left === null ) {
		this.left = new BinarySearchTree(value);
	} else if (value > this.value && this.right === null) {
		this.right = new BinarySearchTree(value);
	} else if(value < this.value && this.left !== null) {
			this.left.insert(value);
	} else if(value > this.value && this.right !== null) {
			this.right.insert(value);		
	};
};

BinarySearchTree.prototype.contains = function(value) {
	
	if(value === this.value) {
		return true;
	};

	if(value < this.value) {
		if(this.left){
			return this.left.contains(value);
		} else {
			return false;
		}
	} else {
		if(this.right) {
			return this.right.contains(value)
		} else {
			return false;
		}
	}

};

BinarySearchTree.prototype.depthFirstLog = function() {

	//console.log(this.value) //pre-order
	if(this.left){
		this.left.depthFirstLog();
	}

	console.log(this.value); // in order 

	if(this.right){
		this.right.depthFirstLog();
	};
	//console.log(this.value) //post-order
};

BinarySearchTree.prototype.nextInOrderSuccessor = function(value) {


};

var myTree = new BinarySearchTree(1);

myTree.insert(2);
myTree.insert(4);
myTree.insert(3);
myTree.insert(5);

//console.log(myTree)
//console.log(myTree.contains(3))
myTree.depthFirstLog()









