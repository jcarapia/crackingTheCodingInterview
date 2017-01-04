/*
Given an array (list) of intervals as input where each interval
 has a start and end timestamps. Input array is sorted by starting 
 timestamps. You are required to merge overlapping intervals
 \ and return output array (list).

Consider below input array. 
Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so should
 be merged to one big interval (1, 8). Similarly intervals (10, 12) 
 and (11, 15) are also overlapping intervals and should be merged 
 to (10, 15).
*/

var testArray = [[1,5], [3,7], [4,6], [6,8], [10,14], [13,15]];
// Expected ouput: [[1, 8], [10, 15]];

function mergeIntervals(int_array) {

	var result = [];
	var current_interval = int_array[0];

	for(var i = 1; i < int_array.length; i++) {

		var x1 = current_interval[0];
		var y1 = current_interval[1];
		var x2 = int_array[i][0];
		var y2 = int_array[i][1];

		if(x2 <= y1){
			current_interval[1] = y2;		
		} else {
			result.push(current_interval);
			current_interval = int_array[i];
		}
	};s
	
	result.push(current_interval);
	return result;
};

console.log(mergeIntervals(testArray))
