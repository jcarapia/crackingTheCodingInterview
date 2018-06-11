// Implement an algorithm to determine if a string has all unique characters
// What if you cannot use additional data structures.


var testString1 = 'abcde'; // true
var testString2 = 'abcdec'; // false

function unique(str){
	for(var i = 0; i < str.length; i++){
		//you only need to search the section of the string after the ith element
		for(var j = i+1; j < str.length; j++){
			if(str[i] === str[j]){
				return false;
			}
		}
	}
	return true;
};


console.log(unique(testString1)); //true
console.log(unique(testString2)); //false

//test2