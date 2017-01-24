/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

/*
- Set flag to start at 0
- Set flag to end at 1
- set flag to longest_run 1
- set longest_index to [0,0];
- set flag to current run 1

- iterate over the string starting at index 1
- if the character is the same as the previous: 
  - add +1 to end
  - add +1 to current run
  - set longest index to [start, end]
  - if current run > longest run => longest run = current run
- if the character isnot the same as the previous
  - set start to i 
  - set current rn to 1

*/

function longestRun(string) {
	
	var start = 0;
	var end = 1; 
	var longest_index = [0, 0];
	var longest_run = 1;
	var current_run = 1;

	for(var i = 1; i < string.length; i++) {
		var current_char = string[i];
		var previous_char = string[i-1];
		
		if(current_char === previous_char) {
			end++;
			current_run++;

			if (current_run > longest_run) {
				 longest_run = current_run;
				 longest_index = [start, end-1];
			};;
		} else {
			end++;
			start = i;
			current_run = 1;
		}
	};

	return longest_run;
};

console.log(longestRun('aaaaaaadddddd'));













