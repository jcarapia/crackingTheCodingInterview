//Given two strings write a method to decide if one is a permutation of the other.

// 'abcde', 'acbde' (true)
// 'abcde', 'akbde' (false)

// Notes: I could loop through one string and then loop through the other and
// check character by character, but ill try a different way to aim for 
// linear time complexity.

function checkPermutation(str1, str2){
	//create objects to store characters and count for each string
	var obj1 = {};
	var obj2 = {};
	//check the length; if not the same length then not permutations
	if(str1.length !== str2.length){
		return false;
	};

	//insert the characters into the objects and count for each letter
	for(var i = 0; i < str1.length; i++){
		if(!obj1[str1[i]]){
			obj1[str1[i]] = 1;
		} else {
			obj1[str1[i]]++
		};

		if(!obj2[str2[i]]){
			obj2[str2[i]] = 1;
		} else {
			obj2[str2[i]]++
		};
	};

	for(var key in obj1){
		//object look-ups are considered to be constant time
		if(obj1[key] !== obj2[key]){
			return false;
		}
	};

	return true;
};

console.log(checkPermutation('bac','cab')) //true
console.log(checkPermutation('abc','cib')) //false

