/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

/*
- Sort the array in ascending order. Note that the native sort() method does not sort negative 
	numbers properly: [-3, -2, -1].sort() => [-1, -2, -3]
- Once sorted, if negative numbers are considered, the max is the following: 
	The number at the highest index * the max of (the numbers at indeces 0 and 1) or (the numbers at the two indeces before the last)
- The reason is that two negative numbers make a positive and this could be bigger than the product of the two positive numbers. 
*/


function largestProductOfThree(array) {

	var sorted_array = sort(array);
	
	var last = array[array.length - 1];
	var product_one = last * array[0] * array[1];
	var product_two = last * array[array.length - 2] * array[array.length - 3];

	if(product_one > product_two) {
		return product_one;
	} else {
		return product_two;
	}

};

function sort(array) {
	array.sort(function(a, b) {
		return a - b
	})
	return array
}

console.log(largestProductOfThree([3, 2, 1, -1, -2, -3]))



