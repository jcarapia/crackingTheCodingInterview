/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

/*
- Initiate pointers to currentSum and maxSum, set maxSum to negativeInfinity
- Iterate over the array
- The current sum is the cummulative sum
- If the current sum is greater than the max sum, replace the max sum with the current sum 
- If at any point the current sum drops below 0, we know that the cumulative sum up to that point 
  will not add to the reamining portion of the array, thus we can reset the current sum to 0
  in order to restart.  
*/


var sample_inputs = [
	[1, 2, 3],
	[1, 2, 3, -4],
	[1, 2, 3, -4, 5],
	[4, -1, 5],
	[10, -11, 11]
];


function sumArray(array) {

	var currentSum = 0;
	var maxSum = Number.NEGATIVE_INFINITY;

	for(var i = 0; i < array.length; i++) {
		currentSum += array[i]
		
		if (currentSum > maxSum) {
			maxSum = currentSum;
		};

		if(currentSum < 0) {
			currentSum = 0;
		} 
	};
	
	return maxSum;
};

function logger(collection, callback) {
	for(var i = 0; i < collection.length; i++) {
		console.log(callback(collection[i]));
	}
};

logger(sample_inputs, sumArray);


