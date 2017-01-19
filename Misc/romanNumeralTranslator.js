
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/*
- Set a flag to the current sum
- Iterate over the roman numeral
- set flags for the current value and the next value
- Note that the next flag will be undefined when the loop reaches the last number in the string
- So, if there is a next value: 
  - If the current is greater than the next, add the current to the sum
  - If the current is smaller than the next, subtract the current from the sum 
- The loop will reach the last value but not go into the loop due to the if statement, 
  but since it is the last element, it can be added. 
- return the sum upon exiting the loop.  

*/

function romanNumeralTranslator(number) {

	var sum = 0;

	for(var i = 0; i < number.length; i++) {
		
		var current = DIGIT_VALUES[number[i]];
		var next = DIGIT_VALUES[number[i+1]]

		if(next) {
			if(current >= next ) {
				value = DIGIT_VALUES[number[i]];
				sum += value;
			} else if (current < next ) {
				value = DIGIT_VALUES[number[i]];
				sum -= value;
			}
		} else {
			sum += current;
		}
	}
	return sum;
};

console.log(romanNumeralTranslator('MMXVII'))












