/*

Given terms t[i] and t[i+1] where i is equal or greater than 1, term t[i+2] is computed using the 
following relation t[i+2] = t[i] + (t[i+1])^ 2

The input will have two arguments - the first two numbers of the series, [0, 1]
and n, the nth number of the series that should be returned.

Sample input:
([1, 2], 5)

Sample output:
5

Explanation:
Since n =5, the 5th number in the series is 5
0 1 1 2 5
0 + 1^2 = 1
1 + 1^2 = 2
1 + 2^2 = 5

*/

function modifiedFibonacci(a, b, n){

	if(n === 1) {
		return a;
	} else if(n === 2) {
		return b;
	}
	
	var first = a;
	var second = b;
	var third;

	for(var i = 3; i <= n; i++) {
		third = first + second*second;
		first = second;
		second = third;
	}
	return third
};

console.log(modifiedFibonacci(1,2,20))