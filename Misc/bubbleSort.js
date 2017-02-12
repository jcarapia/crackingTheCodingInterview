/*
Implement Bubble Sort

Takes in an array of numebers and sorts them in increasing order. 

Since the sorting is done by swapping adjacent elements, we can assume that the sorting will 
be complete when the for-loop iterates up to the limit of iteration and there are no swaps made.

To optimize the solution, we only need to iterate up to the index where the last swap as made. 

1. Set the swap flag to true, the iteration limit to array.length -1, and declare var max (the limit of iteration)
2. Enter the while loop and immediately switch the swap flag to false;
3. Enter the for-loop up to the iteration limit. 
4) Check is the ith element is greater than the ith+1 element, if so, do a swap.
5) After every swap, swet the max to the index value of the ith element. This will set the max for that for-loop 
		iteration to the index at the last swap made. 
6) Upon completing the for-loop, set the limit to the max, thus when the next for-loop initiates, it only iterates up to the
	max swap in the previous round. 
7) If there are no swaps made during a pass, the while loop will exit and return the sorted array.

*/

var sample_input = [5,4,3,2,1];

function bubbleSort(array) {

	var flag = true;
	var limit = array.length - 1;
	var max;

	while(flag) {
		flag = false;

		for(i = 0; i < limit; i++) {
			if(array[i] > array[i+1]) {
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				flag = true;
				max = i;
			}
		};
		limit = max;
	};
	return array;
};

console.log(bubbleSort(sample_input))

