/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */
/*
- Create object store to store character : frequency pairs 
- create a results array to store the arrays with character, frequency
- Iterate over the string and add the character and 1 to the store the 
  first time encountered, add +1 to the frequency when encountered again
- After looping, iterate over the object and turn the key value pairs 
  into arrays inside an array. 
 - use the sort function with options to print as requested 
*/


var sample_input = 'mississippi';

function characterFrequency(string) {
	
	var store = {};
	var results = [];
	
	for(var i = 0; i < string.length; i++) {
		var char = string[i];
		if(!store[char]) {
			store[char] = 1;
		} else {
			store[char]++;
		}
	};

	var keys = Object.keys(store);

	for(var j = 0; j < keys.length; j++) {
		var array = [];
		array[0] = keys[j];
		array[1] = store[keys[j]];
		results.push(array);
	};


	return results.sort(function(a, b) {
		//return a[1] > b[1]; // returns in ascending order by number 
		return a[0] > b[0]; //returns in ascending order by letter
	}); //the 
}

console.log(characterFrequency(sample_input));










