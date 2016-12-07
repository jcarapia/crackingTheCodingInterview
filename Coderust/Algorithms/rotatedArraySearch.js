/*
Search a given number in a sorted array that has been rotated by some arbitrary number. 
Return -1 if the number does not exist.
*/

var testArray = [4, 5, 6, 7,8, 1, 2, 3];

function rotatedArraySearch(arr, target, start, end){
	

	function recurse(array, target, start, end){
		console.log(array, target, start, end)
		if(array.length === 0) return null;
		
		var mid = start + Math.floor((end-start)/2);
		console.log(mid)

		if(target === array[mid]){
			return mid;
		}

		if(array[start] < array[mid] && target < array[mid] && target >= array[start]){
			console.log('one')
			return recurse(array, target, start, mid);
		} else if (array[mid] < array[end] && target > array[mid] && target <= array[end]){
			console.log('two')
				return recurse(array, target, mid+1, end);
		} else if (target > array[mid]) {
			console.log('three')
				return recurse(array, target, start, mid);
		} else if(target < array[mid]){
			console.log('four')
				return recurse(array, target, mid+1, end);
		}

		
		return -1
	}

	return recurse(arr, target, 0, arr.length-1);


};

console.log(rotatedArraySearch(testArray,3))

//at least half of the array will be sorted


//find the middle of the array
	//check to see if the target is the middle -
		//if the middle is the target, return it -
//check to see if the left half is sorted-
	//if sorted 
		//if the number is between the low and mid-
		//recurse with the slice of the array between the low and the mid-
	//if the left is not sorted, the right half is
		//if the number is between the mid and the high-
			//recurse with the the slice of the array between the mid and the high-
		//if the number is not between the mid and the high
			//recurse with the slice of the array between the low and the mid
//				 	




