/*
Quicksort

Given an integer array, sort it in ascending order using quicksort. 

Original array: [55, 23, 26, 2, 25];
Sorted array: [2, 23, 25, 26, 55];

Time complexity: n*log(n);

*/

var testArray = [55, 23, 26, 2, 25];

function quickSort(array) {

	quickSortRecurse(array, array[0], array.length-1);
};

function quickSortRecurse(array, left, right) {
	console.log(array)
	if(left > right) {
		var pivotIndex = partition(array, left, right);
		quickSortRecurse(array, left, pivotIndex-1);
		quickSortRecurse(array, pivotIndex+1, right); 
	};	
};

function partition(array, left, right) {
	var pivot = array[right];
	var i = left; 
	var j = right; 

	 while(i < j) {
		while(array[i] <= pivot && i <= right) {
			i++;
		};

		while(array[j] > pivot) {
			j--;
		};

		if(array[i] < array[j]) {
			var temp = array[j];
			array[i] = array[j];
			array[j] = temp;
		} 
	};

	array[left] = array[j];
	array[j] = pivot;

	return j;
	//return array;
};

//quickSort(testArray);
//console.log(partition([5,4,3,2,1], 0, 4))




