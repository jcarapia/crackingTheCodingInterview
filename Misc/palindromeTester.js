/*
Check if a string is a palindrome, return true is it is, false if not. 

example: 
input: 'kayak'
output: true

input: "boat"
output: false 

*/

//iterate through the string with two pointers, from both ends and end in the middle
//if at any point the value of the pointers is not the same, then we know that the string is not 
//a palindrome.

//Using the regular expression var re = /[^A-Za-z0-9]/g; to remove non-word characters

var sample_input_1 = 'Kayak kayak';
var sample_input_2 = 'boat';

function isPalindrome(string) {

	//var re = /[\W_]/g; // or 
	var re = /[^A-Za-z0-9]/g; //gets rid of non-word and non number characters

	string = string.toLowerCase().replace(re, '');
	console.log(string);

	var mid_index = Math.floor(string.length/2);

	for(var i = 0; i < mid_index; i++) {
		char_forward = string[i];
		cha_backward = string[string.length - 1 - i];
		
		if(char_forward !== cha_backward) {
			return false;
		};
	};

	return true;
};

console.log(isPalindrome(sample_input_1))


