
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandParent = new Tree();
  * var parent = new Tree();
  * grandParent.addChild(parent);
  * var me = new Tree();
  * parent.addChild(me);
  * grandParent.getAncestorPath(me); // => [grandParent, parent, me]
*/
var Tree = function(name){
	this.name = name;
  this.children = [];
};


/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my sibling -> my parent
  *  2.) between me and my cousin -> my grandParent
  *  3.) between my grandParent and my grandParent -> my grandParent
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(node1, node2){
  // TODO: implement me!
  var pathToNode1 = this.getAncestorPath(node1);
  var pathToNode2 = this.getAncestorPath(node2);

  if(!pathToNode1 || !pathToNode2) {
  	return 'The two nodes don\'t share a common ancestor';
  };

  var length = Math.min(pathToNode1.length, pathToNode2.length);

  var closestAncestor;
  for(var i = 0; i < length; i++) {
  	if(pathToNode1[i] === pathToNode2[i]){
  		closestAncestor = pathToNode1[i];
  	}
  }
  return closestAncestor;

};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandParent.getAncestorPath(me) -> [great grandParent, grandParent, parent, me]
  * 2.) parent.getAncestorPath(me) -> [parent, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandParent.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(/*...*/name, ancestors){
  // TODO: implement me!
  ancestors = ancestors || [];

  if(this.name === name) {
  	ancestors.unshift(this.name);
  	return ancestors;
  };

  for(var i = 0; i < this.children.length; i++){
  	if(this.children[i].getAncestorPath(name, ancestors)) {
  		ancestors.unshift(this.name);
  		return ancestors;
  	}
  }
  return null;

}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};


var grandParent = new Tree('grandParent');
var parent1 = new Tree('parent1');
var parent2 = new Tree('parent2');
var parent3 = new Tree('parent3');
var child1 = new Tree('child1');
var child2 = new Tree('child2');
var child3 = new Tree('child3');
var child4 = new Tree('child4');
var child5 = new Tree('child5');
var child6 = new Tree('child6'); 
grandParent.addChild(parent1)
	parent1.addChild(child1);
	parent1.addChild(child2);
grandParent.addChild(parent2);
	parent2.addChild(child3);
	parent2.addChild(child4);
grandParent.addChild(parent3)
	parent3.addChild(child5);
	parent3.addChild(child6);
	var parent4;
//console.log(grandParent.children.includes(parent4))
//console.log(grandParent.getAncestorPath('grandParent'))
console.log(grandParent.getClosestCommonAncestor('parent1', 'child1'))
