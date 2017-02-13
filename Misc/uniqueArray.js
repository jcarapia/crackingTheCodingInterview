/*
Given an array, return an array without duplicates

*/

function uniqueArray(array) {
	var container = {};
	var uniqueArray = [];

	for(var i = 0; i < array.length; i++){
		if(!container[array[i]]){
			container[array[i]] = 1;
			uniqueArray.push(array[i]);
		};
	}
	//return Object.keys(container);
	return uniqueArray; //this method maintains the type of element in the original array
											//Using Object.keys returns an array of string. 
};

console.log(uniqueArray([1,1,2,2,3,4,5,5,6,6,6,7,8,9]))