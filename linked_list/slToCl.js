class Node{
	constructor(data){
	this.data = data;
	this.next = null;
}
}

function traversal(head){
	if(head == null) return;
	let currentNode  = head;
	while(currentNode != null){
	console.log(currentNode.data);
	currentNode = currentNode.next;
}
}

function traversalCirculatLL(head){

	if(head == null) return;

	let currentNode  = head;

	do{
		console.log(currentNode.data);
		currentNode = currentNode.next;
    }while(currentNode != head)
}

function createSingleLinkedList(arr){
	if(arr.length == 0) return;
	
	let head = new Node(arr[0]);
	let currentNode = head;
	for(let i= 1; i< arr.length; i++){
	let newNode = new Node(arr[i]);
	currentNode.next = newNode;
	currentNode = currentNode.next;
}
return head;
}

function createCircularLinkedList(arr){
	if(head == null) return;
	
	let currentNode = head;
	while(currentNode.next != null){
	    currentNode = currentNode.next
    }
    currentNode.next = head; 
	return currentNode;
}

let arr = [1,2,3,4,5];
let head = createSingleLinkedList(arr);
console.log("single linked list");
traversal(head);

head = createCircularLinkedList(head);
console.log("circular linked list");
console.log(head)

traversalCirculatLL(head);

