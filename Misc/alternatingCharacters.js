/*
Shashank likes strings in which consecutive characters are different. For example, 
he likes ABABA, while he doesn't like ABAA. Given a string containing characters  
and  only, he wants to change it into a string he likes. To do this, he is allowed 
to delete the characters in the string.

Your task is to find the minimum number of required deletions.

Input Format:
The first line contains an integer , i.e. the number of test cases. 
The next  lines contain a string each.

Output Format:
For each test case, print the minimum number of deletions required.

Sample Input:
5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB
Sample Output

3
4
0
0
4
Explanation

AAAA  A, 3 deletions
BBBBB  B, 4 deletions
ABABABAB  ABABABAB, 0 deletions
BABABA  BABABA, 0 deletions
AAABBB  AB, 4 deletions because to convert it to AB we need to delete 2 A's and 2 B's
*/

function alternatingCharacters(string) {

	var count = 0;

	if(string.length === 1) {
		return count;
	};

	for(var i = 1; i < string.length; i++) {
		if(string[i-1] === string[i]) {
			string = string.slice(0,i) + string.slice(i+1);
			count++;
			i--
		}
	};
	
	return count;
};

console.log(alternatingCharacters('AAABBB'))










