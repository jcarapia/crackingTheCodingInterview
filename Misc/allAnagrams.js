/*
Given a string, return all possible anagrams
Example: 
input: 'abc'
output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
*/

function allAnagrams(string) {
	var container = {};

	function anagram(anag, str) {
		if(str.length === 0){
			container[anag] = 1;
		};

		for(var i = 0; i < str.length; i++) {
			anagram(anag + str[i], str.slice(0,i) + str.slice(i+1));
		};
	};
	anagram('', string);

	return Object.keys(container);
};

console.log(allAnagrams('abc'))