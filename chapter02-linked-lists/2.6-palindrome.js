/*
Palindrome
Implement a function to check if a linked list isa palindrome
1.Iterate through the linked list and push the values into an array
2.Compare the array to the reverse of the array
	If true, linked list is a palindrome
	else, not palindrome

*/

function linkedListPalindrome(linkedList){
	var values = [];
	var reverseValues = null;

	var currentNode = linkedList.head;
	while(currentNode){
		values.push(currentNode.value);
		currentNode = currentNode.next;
	};

	for(var i = 0; i < Math.ceil(values.length/2); i++){
		if(values[i] !== values[values.length -1 -i]){
			return false;
		};
	};
	
	return true;
};

console.log(linkedListPalindrome()) //pass!