/*
String Compression
Implement a method to perform basic string compression using the 
counts of repeated characters. For example, the string aabcccccaaa
would become a2b1c5a3. If the 'compressed' string would not become 
smaller, than the original string, your method should return the 
original string. You can assume the string has only uppercase 
and lowercase letters (a-z)

1. I will convert the string to have all lower case letters, for
	 simplicity. I don't think it would make sense to 
	 count lowercase and uppercase separately aaAA -> a2A2.
	 However, my implementation would be able to solve that case. 
2. Maintain a currentLetter and currentCount variable...
   and current string.
3. Traverse the string. If the letter is the same, update the 
 		current count. 
 		If the letter changes, take the currentLetter and currentCount
 		and concatenate them to the currentString
4. Reset the current letter and current count. 

*/

function stringCompression(string) {

	var currentString = '';
	var currentLetter = string[0];
	var currentCount = 1;

	for(var i = 1; i < string.length; i++){
		if(string[i] === currentLetter){
			currentCount++;
		} else {
			currentString += currentLetter + currentCount.toString();
			currentLetter = string[i];
			currentCount = 1;
		}
		// concatenate whatever is there when you reach the end 
		// of the string
		if(string[i+1] === undefined){
			currentString += currentLetter + currentCount.toString();
		}
	}

	// if the 'compressed string' does not become smaller than 
	// the original string, return the original string
	if(currentString.length < string.length){
		return currentString; 
	} else {
		return string;
	}	
};

console.log(stringCompression('aabcccccaaa')) //a2b1c5a3



