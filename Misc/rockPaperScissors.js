/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

/*
- iterative solution uses 3 nested loops: i, j, k
*/

function rockPaperScissors() {
	
	var results = [];
	var array = ['rock', 'paper', 'scissors'];

	for(var i = 0; i < array.length; i++) {
		for(var j = 0; j < array.length; j++) {
			for(var k = 0; k < array.length; k++) {
				var solution = [array[i], array[j], array[k]];
				results.push(solution);
			}
		}
	}
	return results;
}; 

console.log(rockPaperScissors())