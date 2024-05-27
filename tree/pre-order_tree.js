class Node{
	constructor(data){
	this.data = data;
	this.left = null;
	this.right = null;
}
}

function createNode( data ){
	let newNode = new Node(data);
	return newNode;
}

function traversal(root){
	if(root == null ) return;
	if(root != null){
	console.log(root.data);
	traversal(root.left);
	traversal(root.right);
}
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

traversal(root);

let maxLevel = -1;

function leftView(root, level){
	if(root == null) return;
	if(maxLevel < level){
		console.log(root.data);
		maxLevel = level;
    }
    leftView(root.right, level+1);
	leftView(root.left, level+1);
}

function inorderTraversal(root){
	if(root == null) return;
	while(root != null){
		
	}
}

console.log("left view");
leftView(root, 0);

console.log("inorder");
inorderTraversal(root);




