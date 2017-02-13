/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

 var matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]

 var matrix2 = [
 			[1, 2, 3, 4], 
 			[5, 6, 7, 8], 
 			[9, 10, 11, 12], 
 			[13, 14, 15, 16]
 		]

var spiralTraversal = function(matrix){

	var container = [];

	while(matrix.length){

		//concat the 1st array
		container = container.concat(matrix.shift());

		for(var i = 0; i < matrix.length; i++) {
			container.push(matrix[i].pop());
		};

		if(matrix.length){
			container = container.concat(matrix.pop().reverse());
		};

		for(var j = matrix.length -1; j >=0; j--) {
			container.push(matrix[j].shift());
		};
	};

	return container;
};

console.log(spiralTraversal(matrix2))
