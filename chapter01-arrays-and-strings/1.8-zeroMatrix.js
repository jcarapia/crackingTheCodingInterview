/*
Zero Matrix
Write an algorithm such that if an element in an MxN matrix is 0, 
its entire row and column are set to zero

1. Find the location [row, column] of the 0 and store in 
   location arrays. One array will have row indexes, the other 
   	array will have column indexes.
2. Iterate through the row indexes array and set all to 0
3. Iterate through the column indexes array and set all columns to 0

*/

var matrix = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
							[1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
							[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
							[1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
							[1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
							[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

function zeroMatrix(matrix){
	var zeroRowIndex = [];
	var zeroColIndex = [];

	//store all the positions where 0s are found
	for(var i =0; i < matrix.length; i++){
		for(var j = 0; j < matrix[i].length; j++){
			if(matrix[i][j] === 0){
				zeroRowIndex.push(i);
				zeroColIndex.push(j);
			};
		};
	};

	//convert rows to 0s
	for(var i = 0; i < zeroRowIndex.length; i++){
		var rowIndex = zeroRowIndex[i];
		for(var j = 0; j < matrix[rowIndex].length; j++){
			matrix[rowIndex][j] = 0;
		}
	};

	//convert columns to 0
	for(var i =0; i < zeroColIndex.length; i++){
		colIndex = zeroColIndex[i];
		for(j = 0; j < matrix.length; j++){
			matrix[j][colIndex] = 0; 
		}
	};

	return matrix;
};

console.log(zeroMatrix(matrix)); //pass







