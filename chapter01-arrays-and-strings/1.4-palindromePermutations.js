// Given a string, write a function to check if it is a permutation of a 
// palindrome. The palindrome does not need to be limited to just dictionary words

// Example: 
// Input: Tact Coa
// Output: true, (permutations: "taco cat", "atco cta")

// To check if a permutation is possible, we must consider two cases based 
// on whether the length of the string is even or odd:
// - even case: the number of times each specific character appears in 
//   the string will be even.
// - odd case: the number of times each specific character appears in 
//   the string will be even, except for one type of character, which will 
//   be odd.

// empty spaced will be ignored and not taken into account

 var testString = "Tact Coa";

 function permuDrome(str){

 	//remove all spaces from the string 
 	var stringNoSpace = "";
 	for(var i = 0; i < str.length; i++){
 		if(str[i] !== ' '){
 			stringNoSpace += str[i].toLowerCase();
 		}
 	};
 	
 	//store characters and instance count
 	var charCount = {};

 	// case for even-length string============
 	if(stringNoSpace.length % 2 === 0){
 		for(var i = 0; i < stringNoSpace.length; i++){
 			if(!charCount[stringNoSpace[i]]){
 				charCount[stringNoSpace[i]] = 1;
 			} else {
 				charCount[stringNoSpace[i]]++
 			}
 		};

 		for(var key in charCount){
 			if(charCount[key] %2 !==0 ){
 				return false;
 			}
 		}
 		return true;
 	};
 	//=========================================

 	// case for odd-length string============
 	if(stringNoSpace.length % 2 !== 0){
 		for(var i = 0; i < stringNoSpace.length; i++){
 			if(!charCount[stringNoSpace[i]]){
 				charCount[stringNoSpace[i]] = 1;
 			} else {
 				charCount[stringNoSpace[i]]++
 			}
 		};

 		//only one character should appear an odd number of times
 		var oddCharCount = 0;
 		for(var key in charCount){
 			if(charCount[key] %2 !==0 ){
 				oddCharCount++
 			}
 			if(oddCharCount > 1){
 				return false
 			}
 		}
 		return true;
 	};
 	//=========================================
 	
 };

 console.log(permuDrome(testString)) 


