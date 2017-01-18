/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
 
/*
Place the characters from stringB in an object in order to prevent duplication 
Iterate through stringA since we care about the order of appearance in stringA
If the object contains the character from stringA, concatenate to results string
*/

 var str1 = 'acexivou';
 var str2 = 'aegihobuu';

 function commonCharacters(stringA, stringB) {
 	var results = '';
 	var store = {}; 

 	for(var i = 0; i < stringB.length; i++) {
 		
 		var charB = stringB[i];
 		
 		if(!store[charB]) {
 			store[charB] = charB;
 		}
 	};


 	for(var j = 0; j < stringA.length; j++) {
 		var charA = stringA[j];
 		if(store.hasOwnProperty(charA)) {
 			results += charA;
 		}
 	};

 	return results;
 }

console.log(commonCharacters(str1, str2))


