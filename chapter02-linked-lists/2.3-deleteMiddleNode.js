/*
Delete Middle Node 
Implement an algorith to delete a node in the middle 
(any node but the first and last node)

1. Given that we only have access to a specific node and not 
to head, we cannot iterate. So, the assumption is made that 
we somehow access the node directly.

2. Given that the node is of the format: 

var someNode = {
								value = 1;
								next = theNextNode;	
								};
We can then perform the following steps:
	2.1 Assign this.value = next.value;
					   this.next = next.next;
By replacing the this node's value and next reference
we have "deleted" the this node.					   							
*/

