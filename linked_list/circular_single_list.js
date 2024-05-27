class Node{
	constructor(data){
	this.data = data;
	this.next = null;
}
}

function traversal(head){
	if(head == null) return;
	let currentNode = head;
	do{
		console.log(currentNode.data);
		currentNode = currentNode.next;
}while(currentNode != head)
}

function createNode(data){
	let newNode = new Node(data);
return  newNode;
}
function circularLinkedList(arr){
	if(arr.length == 0 ) return;
	let head = createNode(arr[0]);
	let currentNode = head;
	for(let i=1; i<arr.length; i++){
		let newNode = new Node(arr[i]);
		currentNode.next = newNode;
		currentNode = newNode;
	}
	currentNode.next = head;
	let last = currentNode
	return last;
}
function insertAtbegin(last, val){
	if(last.next == null) return createNode(val);

	let head = last.next;
	let newNode = createNode(val);
	newNode.next = head;
	last.next = newNode;
	
	return last;
}



function insertAtEnd(last, val){
	if(last.next == null) return;
	let newNode = createNode(val);
	// console.log("newNode", newNode);
	newNode.next = last.next;
	last.next = newNode;
	last = newNode;
	return last;
}

function insertionInBetween(last, val, k){
	
	if(last.next == null) return;

	let pos = 1;
	let head = last.next;
	let currentNode = head;

	do{
		currentNode = currentNode.next;
		pos++;
	}while(pos<k && currentNode != head)
	
	let newNode = createNode(val);
	newNode.next = currentNode.next;
	currentNode.next = newNode;

	return last;
}

let arr = [23, 32, 2, 54, 55, 76, 87];

let last = circularLinkedList(arr);

traversal(last.next);

last = insertAtbegin(last, 0);
console.log("insert At Begin");
traversal(last.next);

last = insertAtEnd(last, 10);
console.log("insert At End");
traversal(last.next);

last = insertionInBetween(last, 43, 2);
console.log("insert in between");
traversal(last.next);

