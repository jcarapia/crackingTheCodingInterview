/*
John has discovered various rocks. Each rock is composed of various elements, and each element is 
represented by a lower-case Latin letter from 'a' to 'z'. An element can be present multiple times 
in a rock. An element is called a gem-element if it occurs at least once in each of the rocks.

Given the list of  rocks with their compositions, display the number of gem-elements that exist in 
those rocks.

Input Format
The first line consists of an integer, , the number of rocks. 
Each of the next  lines contains a rock's composition. Each composition consists of lower-case letters
 of English alphabet.

Constraints 
Each composition consists of only lower-case Latin letters ('a'-'z'). 
length of each composition 

Output Format

Print the number of gem-elements that are common in these rocks. If there are none, print 0.

Sample Input

3
abcdde
baccd
eeabg
Sample Output

2
Explanation

Only "a" and "b" are the two kinds of gem-elements, since these are the only characters that occur 
in every rock's composition.
*/

function processData(input) {
    //Enter your code here
    var input_array = input.split("\n");
    var n = parseInt(input_array[0]);
    var gem_hash = {}; //contain all the letters in all of the gems 
    var gem_array = []; //turn each gem into a hash and store here
  
    for(var i = 1; i <= n; i++) {
      var container = {};
      var gem = input_array[i];
      
      for(var j = 0; j < gem.length; j++) {
        var char = gem[j];
        if(!container[char]) {
          container[char] = char
        }
        if(!gem_hash[char]) {
          gem_hash[char] = char;
        }
      };
      gem_array.push(container);
    }; //at this point i have populated the gem_hash and the gem_array, now loop though the gem hash 
      // and if any one gem doesn't have the element, we know that that element is not a gem element. 
      //Loop thorough the keys in the gem_hash, then check if each gem has the letter
    
    for(var key in gem_hash) {
      for(k = 0; k < gem_array.length; k++) {
        if(!gem_array[k].hasOwnProperty(key)){
          delete gem_hash[key];
        }
      }
    }
    var gem_elements = Object.keys(gem_hash).length;
    console.log(gem_elements)
} 