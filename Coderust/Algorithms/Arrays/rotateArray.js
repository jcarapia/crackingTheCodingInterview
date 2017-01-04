/*
Given an array of integers, rotate the array by 'N' elements, 
where N is an integer. 

for example, given the array below: 
var array = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

after '-1' rotations, it should look like this

var array = [10, 20, 0, 59, 86, 32, 11, 9, 40, 1];

after '2' rotations of the original array, it should look like this

var array = [9, 40, 1, 10, 20, 59, 86, 32, 11];

*/

//-1 means shift all to the left by 1
//2 means to shift all to the right by 2

var testArray = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

function rotateArray(array, N) {

	var reverse = array.reverse();
	var section1 = reverse.slice(0, N);
	var section2 = reverse.slice(N);

	return section1.reverse().concat(section2.reverse());

};

//have a blank results array
//reverse the array
	//slice the array in two at N
	//concat the reverse of the slices into the results array

//Note that slice works for negative numbers as well
//[1, 2, 3].slice(-1) => [3]
//however, in this case the array reversals would not be necessary.	
console.log(rotateArray(testArray, 2))
