/*
A circus is designing a routine consisting of people standing atop one another's 
shoulders. For practical and aesthetic reasons, each person must be both shorted and 
lighter than the person below him or her. Given the heights and weights of each 
person in the circus, write a method to compute the largest possible number of people 
in such tower. 
*/

var testArray = [[65,100], [70,200], [56,90], [75,190], [60,95], [68,110]];
//output = [[56,90], [60,95], [65,100], [68,110], [75,190]];

//sort the array by height
//
function circusTower(array){



	sortedArray = array.sort(function(a,b){
		return a[0] > b[0]
	});

	var result = []

	for(var i = 0; i < sortedArray.length-1; i++){
		var next = getNext(sortedArray[i], sortedArray.slice(i+1));
		result.push(next);
	}

	return result;
};

function getNext(current, remaining){
	var tallestLightest = current;
	for(var i = 0; i< remaining.length; i++){
		if(remaining[i][1] < current[1] && remaining[i][0] > current[0] && remaining[i][1] < current[1]){
			tallestLightest = remaining[i]
		}
	}
	return tallestLightest;
}

console.log(circusTower(testArray))