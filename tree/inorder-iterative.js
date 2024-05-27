class Node{
	constructor(data){
	this.data = data;
	this.left = null;
	this.right = null;
}
}

function createNode(data){
	let newNode = new Node(data);
   return newNode;

}


let root = createNode(1);


root.left = createNode(2);
root.right = createNode(3);


root.left.left = createNode(4);
root.left.right = createNode(5);


root.right.left = createNode(6);
root.right.right = createNode(7);


root.left.left.left = createNode(8);
root.left.left.right = createNode(9);


function inorderTraversal(root){
	if(root == null) return;
let node = root;
if( root != null ){
	inorderTraversal(root.left);
	console.log(root.data);
	inorderTraversal(root.right);
}
}

function recursionInorderTraversal(root){
	let currentNode = root;
	let stack = [];
while(currentNode != null || stack.length >0){
	while(currentNode != null){
		stack.push(currentNode);
	currentNode = currentNode.left; 
}
	
	currentNode = stack.pop();
	console.log(currentNode.data);
	currentNode = currentNode.right;
}
}
console.log("recursion inorderTraversal");
inorderTraversal(root);


console.log("recursion recursionInorderTraversal");
recursionInorderTraversal(root);


