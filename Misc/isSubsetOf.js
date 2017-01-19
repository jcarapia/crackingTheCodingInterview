/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

/*
- Place all of the elements of the input in a hash in order to prevent duplicates 
  and to have access to hash's constant time lookup 
- Iterate through the subset array and if check if the elements are in the store array. 
  If an element is not in the hash, return false. If the loop finishes, it will return true. 
*/

var test_input = ['one', 'two'];
var array = ['one', 'two', 'three'];

Array.prototype.isSubsetOf = function(array) {
	
	var store = {};
	var subset = this;

	for(var i = 0; i < array.length; i++) {
		var element = array[i];
		
		if(!store[element]) {
			store[element] = element;
		};	
	};

	for(var j = 0; j < subset.length; j++) {
		var value = subset[j];
		if(!store[value]) {
			return false
		}
	};

	return true;
};

console.log(test_input.isSubsetOf(array));

