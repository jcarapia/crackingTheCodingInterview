/*
Given three integer arrays sorted in ascending order, find the smallest number that is common 
in all three arrays. For example, lets look at the below three arrays. Here, 6 us the smallest 
number that is commin in all the arrays.

var array1 = [6, 7, 10, 25, 30, 63, 64];
var array2 = [-1, 4, 5, 6, 7, 8, 50];
var array3 = [1, 6, 10, 14];

*/

var array1 = [6, 7, 10, 25, 30, 63, 64];
var array2 = [-1, 4, 5, 6, 7, 8, 50];
var array3 = [1, 6, 10, 14];

function smallestCommonNumber(arrayOne, arrayTwo, arrayThree) {
	
	//iterate through all three
	var i = 0;
	var j = 0;
	var k = 0;

	//iterate through all three arrays while the iterators are less than the length of the array
	//if the iterator reaches the end of any of the arrays without finding a lowest commin number, 
	//then there isn't one
	while( i < arrayOne.length &&
				 j < arrayTwo.length &&
				 k < arrayThree.length){

		//when all three ietarators point to the same value, we have the lowest common number
		if(arrayOne[i] === arrayTwo[j] && arrayTwo[j] === arrayThree[k]){
			return arrayOne[i];
		};

		//if the first element of the first array is smaller than the first element of the 
		//other two arrays, then move the iterator up by one...same for the other 
		//two arrays
		if(arrayOne[i] < arrayTwo[j] && arrayOne[i] < arrayThree[k]){
			i++;
		};

		if(arrayTwo[j] < arrayOne[i] && arrayTwo[j] < arrayThree[k]){
			j++;
		};

		if(arrayThree[k] < arrayOne[i] && arrayThree[k] < arrayTwo[j]){
			k++
		}
	}

	//if there is no match, return -1
	return -1

};

console.log(smallestCommonNumber(array1, array2, array3))
