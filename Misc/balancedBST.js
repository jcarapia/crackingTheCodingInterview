/*

Construct a balanced BST from a sorted array

Given a sorted array of integers, create a balanced BST.

*/

var Tree = function (value){
	this.value = value; 
	this.left = null; 
	this.right = null; 
};

var sample_input = [1, 2, 3, 4, 5, 6, 7,8]

function balancedBST(array) {

if(array.length === 0){
	return null;
};

var mid_index = Math.floor(array.length/2);
var mid_value = array[mid_index]

var left = array.slice(0, mid_index);
var right = array.slice(mid_index+1); //Note the +1 since the mid index should not be passed
																			//thus we start slicing at the next index.

var tree = new Tree(mid_value);

tree.left = balancedBST(left);
tree.right = balancedBST(right);


return tree;

};

console.log(balancedBST(sample_input))



