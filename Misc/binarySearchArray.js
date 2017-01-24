/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var sample_input = [1,2,3,4,5, 6, 7]; 

var binarySearch = function (array, target) {

	var sub = function(low, high) {
		if (high < low) {
			return null
		};

		var mid = Math.floor((high-low)/2) + low;
		console.log(low, high, mid)

		if(target === array[mid]){
			return mid;
		} else if(target > array[mid]) {
			return sub(mid+1, high);
		} else {
			return sub(low, mid-1);
		}
	}

	return sub(0, array.length-1)

};

console.log(binarySearch(sample_input, 3))

//Note the variation below
/*
var binarySearch = function (array, target) {

	var sub = function(low, high) {
		if (high === low) {
			return null
		};

		var mid = Math.floor((high-low)/2) + low;

		if(target === array[mid]){
			return mid;
		} else if(target > array[mid]) {
			return sub(mid, high);
		} else {
			return sub(low, mid);
		}
	}

	return sub(0, array.length)

};

console.log(binarySearch(sample_input, 7))
*/