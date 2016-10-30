/*
Return Kth to Last 
Implement an algorithm to find the kth to last element in 
a singly-linked list.

1. Iterate through the linked list and keep a counter until the end.
2. Calculate the kth to last element based on the counter and save
		to a second counter. 
3. Iterate up to the second counter and return the node

*/

function returnKthToLast (linkedList, k){
	var counter1 = 0; //length of linked list
	var counter2 = 0;	//position kth from last node
	var resultNode = linkedList.head;

	var currentNode = linkedList.head;

	while(currentNode){
		counter1++;
		currentNode = currentNode.next;
	};

	counter2 = counter1 - k;
	

	while(counter2 > 1){
		resultNode = resultNode.next;
		counter2--;
	};

	return resultNode;
};

console.log(returnKthToLast(myList, 1))