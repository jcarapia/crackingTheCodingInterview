/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...									5
 *												8
 */

 function nthFibonacci(n) {
 	
 	if(n <= 2) {
 		return 1;
 	}

 	return nthFibonacci(n-2) + nthFibonacci(n-1);
 };

// console.log(nthFibonacci(7))


function iterate_fib(n) {
	var a = 1; 
	var b = 1; 
	var c;

	if(n <=2) {
		return 1;
	};

	for(var i = 3; i <= n ; i++) {
		var c = a + b;
		a = b; 
		b = c;
	}

	return c;
};

console.log(iterate_fib(7))





