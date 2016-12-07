/*
Route Between Two Nodes 
Given a directed graph, design an algorithm to find out whether 
there is a route between two nodes.
*/



function Node(value){
	this.value = value;
	this.edges = [];
};

Node.prototype.addEdge = function(endPoint) {
	this.edges.push(endPoint);
};

function Graph(){
	this.nodes = [];
};

Graph.prototype.eddEdge = function(startPoint, endPoint) {
	// body...
};


//===Testing === //
var myGraph = new Graph();
console.log(myGraph)