
/*
Super Reduced String

Given a string of lower case letters, reduce the string via the following rules: 
1) If the string has 2 identical consecutive letters, remove those two letters
2) Remove one set of duplicate letters per pass of the loop
3) If the string is completely deleted, print "EMPTY STRING"
4) Otherwise print the super reduced string

example 1: 
input = 'aabbcc'
output = 'EMPTY STRING'

example 2: 
input = 'aaabbbccc'
output = 'abc'

*/

var input = 'baabaabaab';

function superReducedString(string) {
	for(var i = 0; i < string.length; i++) {
		if(string[i] === string[i+1]) {
			string = string.slice(0,i) + string.slice(i+2) //remove ith plus i+1th
			i = 0; // take into account that an element was removed so do not advance or an element will
								 // be skipped
		}
	};

	if(string.length === 2 && string[0] === string[1]) {
		console.log('EMPTY STRING');
	} else if(string.length === 0) {
		console.log('EMPTY STRING');
	} else {
		console.log(string);
	};
}
				// 0 to element before 2 + third to last
 // input = input.slice(0,2) + input.slice(3)
 // console.log(input)

superReducedString(input)


