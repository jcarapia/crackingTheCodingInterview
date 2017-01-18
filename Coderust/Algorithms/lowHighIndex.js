/*
Given a sorted array of integers, return the low and high index of a given key. 
Return -1 if not found. The array length can be millins with lots of duplicates.

In the following example, low and high indices would be:

Key: 1, Low=0 and High=0

Key: 2, Low=1 and High=1

Key: 5, Low=2 and High=9

key: 20, Low=10 and High=10

var sampleArray = [1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20];

Use Binary Search
*/

//use binary search once to find the lowest value 
//use a second binary search to find the highest value

var testArray = [1, 2, 5, 5, 5, 5, 5, 5, 5, 6, 20];

let find_low_index = function(arr, key){
	let low = 0; 
	let high = arr.length-1;
	let mid = Math.floor(high/2);

	while(low <= high){
		let mid_elem = arr[mid];
		
		if(mid_elem < key){
			low = mid + 1;
		} else {
			high = mid-1;
		}

		mid = low + Math.floor((high-low)/2);
		console.log(low, high, mid)
	}

	if(arr[low] === key){
		return low;
	}
	return -1
}

//console.log(find_low_index(testArray, 5))

let find_high_index = function(arr, key) {
	let low = 0;
	let high = arr.length - 1; 
	let mid = Math.floor(high / 2);

	while(low <= high) {
		let mid_elem = arr[mid];
		console.log(arr[mid])
		if(mid_elem <= key) {
			low = mid + 1;
		} else {
			high = mid-1;
		}

		mid = low + Math.floor((high-low)/2);

	}
	console.log(high)
	if(arr[high] === key) {
		return high;
	}

	return -1
}

console.log(find_high_index(testArray, 6))

