/*
Quicksort

Given an integer array, sort it in ascending order using quicksort. 

Original array: [55, 23, 26, 2, 25];
Sorted array: [2, 23, 25, 26, 55];

Time complexity: n*log(n);

*/

function quickSort(array) {
	quickSortRecurse(array, array[0], array.length-1);
};

function quickSortRecurse(array, left, right) {
	if(left >= right) {
		return;
	}
	var pivotIndex = partition(array, left, right);
	quickSortRecurse(array, left, index-1);
	quickSortRecurse(array, index+1, right); 
};

function partition(array, left, right) {
	var pivot = array[left];
	var i = left; 
	var j = right; 

	while(i < j) {

	}
}

quickSort([1,3,2,5,4,7,6])



