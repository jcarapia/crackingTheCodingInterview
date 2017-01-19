// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.

/*
Step 1: 
Multiplication: function(a,b)
- Create sum variable set to 0
- For loop up to b, add a to sum on each iteration
- * If loops starts at 0, use < b, <=b if loop starts at 1
*/

function multiplication(a, b) {
	var sum = 0; 

	for(var i = 0; i < b; i++) {
		sum += a;
	};

	return sum;
};
//console.log(multiplication(4,3))

/*
Division
The assumption here is that the the quotient is 0
- Cumulative sum of b until the sum equals a, at this point i, or the number 
  of times b has been added is equal to the quotient.  
*/

function division(a, b) { /*= a/b =*/
	var product = 0;
	
	for(var i = 1; i <= a; i++) {
		product += b;
		if(product === a) {
			return i;
		}
	}
};

//console.log(division(18, 3))

/*
Modulo
- Example: 5%2 = 1 since 5/2 =2 R1, the result of modulo is the remainder. 
- Cumulative sum via for-loop
- Once the sum exceeds a, modulo is a minus the previous sum
- Keep current sum and previous sum flags
*/

function modulo(a, b) { // (5, 2) = 1	
	var prevSum = 0; 
	var currSum = 0; 

	for(var i = 0; i < a+1; i++) {
		
		currSum += b;
		if(currSum > a) {
			modulo = a - prevSum;
			return modulo;
		} else {
			prevSum = currSum
		}
	}
};

console.log(modulo(100,2))




