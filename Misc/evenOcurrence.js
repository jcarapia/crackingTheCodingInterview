/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

/*
Iterate through the array and place the number in a hash with a false flag as the value, 
if the number occurs again, flip the flag, and so on. The flag will be false 
for odd occurrences and true for even occurrences. 

Then iterate over the array and check if the character in the object is false or true
 and return the first value for which the flag is false...
 The reason its looking for a false is because when the number is first added to the 
 hash, the ! operator is acting on a falsy, thus switching it into a truthy. The next time it 
 sees the number (the 2nd time), it switches the truthy to a falsy - thus even occurrences will 
 have a falsy flag.
*/

var sample_input = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4];


function evenOccurrence(array) {

	var store = {};

	for(var i = 0; i < array.length; i++) {
		var char = array[i];
		store[char] = !store[char]
	};

	console.log(store)

	for(var j = 0; j < array.length; j++) {
		var char = array[j];
		if(store[char] === false) {
			return char;
		}
	}
	return null;
};

console.log(evenOccurrence(sample_input))



