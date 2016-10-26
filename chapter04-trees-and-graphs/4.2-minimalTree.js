/*
Given a sorted (increasing in order) array with unique integer elements, write an algorith 
to create a binary search tree with minimal height 
*/

/*
Algorithm: 
1. Since the array is sorted, we can create a binary search tree
that is balanced - or as close to balanced as possible - by 
getting the middle element in the array and making it the root
node. 

2. Create an insert function and attach to the Tree prototype
   This function will check value of the current node and if the 
   value is smaller than the root, it will insert in the left side, 
   if the value is larger, it will insert in the right side. 

3. Once we have the constructor for a Tree and created an insert 
	 method, we can create a function whose input is an array, and
	 output is a minimal BST.

NOTES: the insert method created did not work since it doesn't 
satisty the requirement that for every node,
node.left < node.value < node.right.

The functionality to assign the root node worked to 
satisfy this requirement when called recursively! :)    

*/


var array = [1, 2, 3, 4, 5, 6]//, 7, 8, 9, 10];

var Tree = function (value){
	this.value = value; 
	this.left = null; 
	this.right = null; 
};

// 
function minimalBST(array){

	//base case
	if(array.length === 0){
		return null;
	};

	var middleIndex = Math.floor(array.length / 2);
	var root = array.splice(middleIndex, 1)[0];
	var leftArray = array.slice(0, middleIndex);
	var rightArray = array.slice(middleIndex);

	var tree = new Tree(root)
	//recursive case
	tree.left = minimalBST(leftArray);
	tree.right = minimalBST(rightArray);

	return tree;
};

console.log(minimalBST(array)) //PASS!

//Tree.prototype.insert = function(value){
// 	//create and save the new node to a variable
// 	var leaf = new Tree(value);

// 	if(leaf.value < this.value){
// 		if(this.left ===  null){
// 			this.left = leaf;
// 		} else {
// 			this.left.insert(value);
// 		}
// 	};

// 	if(leaf.value > this.value){
// 		if(this.right === null){
// 			this.right = leaf;
// 		} else {
// 			this.right.insert(value);
// 		}
// 	};

// };







