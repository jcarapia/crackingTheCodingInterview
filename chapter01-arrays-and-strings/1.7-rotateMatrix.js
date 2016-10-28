/*
Rotate Matrix:
Given an image represented by an NxN matrix, where each pixel
in the image is 4 bytes, write a method to rotate the image 
by 90 degrees. 

1. When rotated 90 degrees, the 1st row becomes the 1st column, 
   2nd row becomes 2nd column and so on.
2. Naive solution first...refactor later 
3. Save original array so it doesn't get modified
4. Create a a copy and modify this one, layer by layer 
5. Return modified array
*/



var array = [[1, 2, 3, 4],
						 [5, 6, 7, 8],
						 [9, 10, 11, 12],
						 [13, 14, 15, 16]
						];

function rotateMatrix(matrix) {
	//copy all the rows and reverse them
	var rowCopies = [];
	for(var i = 0; i < matrix.length; i++){
		rowCopies.push(matrix[i].slice().reverse());
	};

	//replace the columns with the rows of rowCopies
	for(var i = 0; i < rowCopies.length; i++){
		for(var j = 0; j < rowCopies.length; j++){
			matrix[j][i] = rowCopies[i][j]				
		}
	}
	return matrix;
};

console.log(rotateMatrix(array)) // pass!






