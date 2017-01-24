/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 
/*
- Iterate over the string and keep count of characters in hash
- Iterate over string again, and check the char count in the hash
- If the count is 1, return that char since it is the first one in the strign 
  that is not repeated. 
*/


function nonRepeated(string) {
	var hash = {};

	for(var i = 0; i < string.length; i++) {
		if (!hash[string[i]]) {
			hash[string[i]] = 1;
		} else {
			hash[string[i]]++
		}
	};

	// for(var char in hash) {
	// 	if(hash[char] === 1) {
	// 		return char
	// 	}
	// };

	for(var j = 0; j < string.length; j++) {
		if(hash[string[j]] === 1) {
			return string[j];
		}
	}

};

console.log(nonRepeated('AACBDB'))



