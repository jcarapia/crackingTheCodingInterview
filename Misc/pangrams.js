/*
Pangrams

Roy wanted to increase his typing speed for programming contests. So, his friend advised him 
to type the sentence "The quick brown fox jumps over the lazy dog" repeatedly, because it is 
a pangram. (Pangrams are sentences constructed by using every letter of the alphabet at least once.)
After typing the sentence several times, Roy became bored with it. So he started to look for
other pangrams.

Given a sentence , tell Roy if it is a pangram or not.

Samples: 

input: "We promptly judged antique ivory buckles for the next prize"
output: "pangram"

input: "We promptly judged antique ivory buckles for the prize" 
output: "not pangram"

My solution: 
Since the alphabet has 26 letters, create a hash and put the letters from the string in the hash. 
After iterating over the string, convert hash keys into an array and get the length. 
If the length is 26, then all the letters of the alphabet have been covered and we have a pangram

Note: take spaces into consideration and exlude them from the hash. 
			Also, this solution assumes that non-letter characters will not be in the sentence. 
			If non-letter characters are to be includes then I would make an alphabet hash of all the letters
			in the alphabet and check the character in the string against the hash to make sure that 
			only characters in the alphabet hash are considered.

*/

var input_one = "We promptly judged antique ivory buckles for the next prize";
var input_two = "We promptly judged antique ivory buckles for the prize"; 


function pangram(sentence) {

	var sentence = sentence.toLowerCase();
	var hash = {};
	var char;

	for(var i = 0; i < sentence.length; i++) {
		char = sentence[i];
		if(!hash[char] && char !== " ") {
			hash[char] = char;
		};
	};

	number_letters = Object.keys(hash).length;

	if(number_letters === 26) {
		return 'pangram'
	} else {
		return 'not pangram';
	};
};

console.log(pangram(input_one));
console.log(pangram(input_two));







