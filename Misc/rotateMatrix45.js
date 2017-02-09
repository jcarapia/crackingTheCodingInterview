/*
 * Rotate a matrix 45 degrees to the right.
 *
 *    Input:    |  Output:
 * -------------+-------------
 * [[10,11,12], | [ [10],
 *  [13,14,15]] |  [13,11],
 *              |  [14,12],
 *              |   [15] ]
 * -------------+-------------
 * [[10,11],    | [ [10],
 *  [12,13],    |  [12,11],
 *  [14,15]]    |  [14,13],
 *              |   [15] ]
 * -------------+-------------
 * [[10,11,12], | [  [10],
 *  [13,14,15], |   [13,11],
 *  [16,17,18]] |  [16,14,12],
 *              |   [17,15],
 *              |    [18]  ]
 */

 var test_input_1 = [[1,2,3], [4,5,6], [7,8,9]]
 var test_input_2 = [[10,11,12], [13,14,15]]

function rotateMatrix45(matrix) {
	var results = [];
	var rotated_length = matrix.length + matrix[0].length - 1;

	for(var i = 0; i < rotated_length; i++) {
		results.push([]);
	};

	for(var j =0; j < matrix.length; j++) {
		for(var k = 0; k < matrix[0].length; k++) {
			results[j+k].unshift(matrix[j][k])
		}
	}

	return results;
};

console.log(rotateMatrix45(test_input_2))



