/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

/*
- initiate longest_palindrome to 0.
- Iterate over the string with for loop, iterator = i
- Iterate from the ith element to the last element, iterator j
- at each iteration, a substring is created from ith to jth element
- check if the substring is a palindrome using helper function
- if a palindrome, check the length and if the length is greater than longest_palindrome, reset amount
- at the end of the loops, return longest palindrome

*/

function longestPalindrome(string) {

	var longest_length = 0;
	var longest_palindrome = ''

	for(var i = 0; i < string.length; i++) {
		for(var j = i; j < string.length; j++) {
			var substring = string.slice(i, j+1); // the second parameter is exclusive, thus the + 1 otherise the last element is not included.
			if (isPalindrome(substring)) {
				if(substring.length > longest_length) {
					longest_length = substring.length;
					longest_palindrome = substring;
				}
			}
		}
	}

	var results = 'The longest palindrome is ' + longest_palindrome + ' at ' + longest_length.toString() + ' characters long'; 
	return results;

};

function isPalindrome(string) {
	
	var reversed_string = string.split('').reverse().join('');
	
	if (string === reversed_string) {
		return true;
	} else {
		return false;
	}
};

console.log(longestPalindrome("My dad is a racecar athlete"));

