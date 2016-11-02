/*
Intersection 
Given two singly linked lists, determine if the two lists intersect. 
Return the intersecting node. Note that the intersection is defined
based on reference, not value. That is, if the kth node of the 
first linked list is the same node (by reference) as the jh node
of the second linked list, then they are intersecting.

1. Determine the length of each linked list in order to use
   the nodes from the shorter one as comparison nodes. 
2. Iterate through the shorter list, and compare its nodes 
	 to the nodes of the larger list.
3. If the nodes are the same...since we are comparing 
		by reference, the we can use === 
4. 

1-2-3-4-5-6
					 \
            7-13-14-15
					 /
8-9-10-11-12   

1-2-3-4-5-6
					 \
            7-11-12-13
					 /
     8-9-10   

*/

