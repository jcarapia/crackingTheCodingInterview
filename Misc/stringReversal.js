/*

Reverse a string without using native reverse() method.

Example: 
input: "string"
output: "gnirts"


*/

function reverse(string) {
	//var results = '';
	var ol = string.length;

	for(var i = string.length-1; i>=0; i--) {
		string += string[i];
	};

	string = string.slice(ol);

	return string;
};

console.log(reverse('string'))

//There is no real "in-place" reversal of a string since strings are immutable