/*
Sum of Two Values 

Given an array of integers and a value, determine if there are 
any two integers in the array whose sum equals the given value.

Consider this array and target sums: 

[5, 7, 1, 2, 8, 4, 3]
Target sum: 10 => 7+3 = 10, 2+8 = 10
Target sum: 19 => No two values sum up to 20

*/

// Iterate through the array of integers
// Subtract the integer from the sum, and store in an object
	// if it does not already occur in the object. 
// Check if the integer is in the object, if it is, 
	//the this means that there is a pair that adds up to the 
	//sum. 

// The time complexity should be linear since we are doing a single 
// loop. 
// Note thatThe time complexity of Object.hasOwnProperty is O(1)
// thus maintaining the linear time complexity.	

var testArray = [5, 7, 1, 2, 8, 4, 3];

function sumOfTwoValues(array, sum) {
	
	var remainder_store = {};

	for(var i = 0; i < array.length; i++) {
		if(remainder_store.hasOwnProperty(array[i])) {
			return true;
		} else {
			var remainder = sum - array[i];
			remainder_store[remainder] = array[i];
		}
	}
	return false;
};


console.log(sumOfTwoValues(testArray, 10)); 
console.log(sumOfTwoValues(testArray, 20)); //pass
