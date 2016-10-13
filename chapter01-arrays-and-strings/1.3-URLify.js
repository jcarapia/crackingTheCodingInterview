// Write a method to replace all spaces in a string with '%20'. You may assume 
// that the string has sufficient space at the end to to hold the additional 
// characters, and that you are given the 'true' length of the string.
// Example:
// Input: "Mr John Smith", 13
// Output: "Mr%20John%20Smith"

var testString = "Mr John Smith";

function urlify(str, length){
	var string = "";
	for(var i = 0; i < length; i++){
		if(str[i] === " "){
			string += '%20';
		} else {
			string += str[i];
		}
	}
	return string;
};

console.log(urlify(testString, 13)); //pass!


