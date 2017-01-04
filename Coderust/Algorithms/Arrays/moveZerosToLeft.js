/*
Given an integer array, move all the 0's to the left, while maintaining the 
order of the other elements.

var array = [1,0,2,0,3,4,0] => [0,0,0,1,2,3,4];
*/

var testArray = [1,0,2,0,3,4,0]; 

function moveZerosToLeft(array){
	for(var i = 0; i < array.length; i++){
		if(array[i] === 0){
			array.unshift(array.splice(i,1)[0]);
		}
	}
	return array;
};

console.log(moveZerosToLeft(testArray))

//The for-loop solution would be considered the naive solution
//time complexity can be improved to linear
