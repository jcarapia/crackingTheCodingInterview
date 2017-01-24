/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

 /*
 - Check if every number from 2 up to the square root of the number 
 - check the if the modulo is 0; If it is, it's not a prime
 */

function primeTester(number) {
	
	if (number === 1) {
		return false;
	}

	if (number <= 3) {
		return true;
	};

	var square_root = Math.ceil(Math.sqrt(number));

	for(var i = 2; i <=square_root; i++) {
		if(number % i === 0){
			return false;
		}
	}

	return true;
};

console.log(primeTester(97));





