/*
There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. Given 
two strings, write a function to check if they are one edit
(or zero edits) away
EXAMPLE: 
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false

1. I will first check the length. If the difference is greater than 
   one, return false. 
2. Place the letters and count of each letter for each string
   in an object.
3. Loop through the objects and compare the count. For every
   mismatch, update the edit counter by 1. If it gets to 2, return 
   false.
Note: we will have to loop through the 'longer' object in 
order to capture the possibilty of a character being removed.  
*/

function oneAway(string1, string2) {
	
	var edits = 0;
	var stringObj1 = {};
	var stringObj2 = {};
	var longerObject = null;
	var shorterObject = null;

	if(Math.abs(string1.length - string2.length) > 1){
		return false;
	};

	//turn the strings into objects and count the letters
	for(var i = 0; i < string1.length; i++){
		if(!stringObj1[string1[i]]){
			stringObj1[string1[i]] = 1;
		} else {
			stringObj1[string1[i]]++;
		};
	};

	for(var i = 0; i < string2.length; i++){
		if(!stringObj2[string2[i]]){
			stringObj2[string2[i]] = 1;
		} else {
			stringObj2[string2[i]]++;
		};
	};

	// determine which object is the 'longest' and iterate through 
	// this one. If both have the same number of keys, or if 
	// stringObj2 is 'longer', stringObj2 will be assigned 
	// as the 'longer' object

	if(Object.keys(stringObj1) > Object.keys(stringObj2)){
		longerObject = stringObj1;
		shorterObject = stringObj2;
	} else {
		longerObject = stringObj2;
		shorterObject = stringObj1;
	};

	// iterate through the object keys and if a discrepancy 
	// is found, increment the edits by 1. If it ever reached 2, 
	// return false
	for(var key in longerObject){
		if(longerObject[key] !== shorterObject[key]){
			edits++;
			if(edits > 1){
				return false;
			}
		}
	};

	return true;
};

console.log(oneAway('pale', 'bake')) // false
console.log(oneAway('pale', 'bale')) // true
console.log(oneAway('pales', 'pale')) // true
console.log(oneAway('pale', 'ple')) // true

