class Node{
	constructor(data){
	this.data = data;
	this.prev = null;
	this.next = null;
}
}

function createDLinkedList(arr){
	let head = new Node(arr[0]);
	let currentNode = head;
for(let i=1 ; i<arr.length ; i++){
	let newNode = new Node(arr[i]);
	currentNode.next = newNode;
	newNode.prev = currentNode;
	currentNode = newNode;
}
return head;
}

function traversal(head){
	if(head == null) return;
	let currentNode = head;
	while(currentNode != null){
	console.log(currentNode.data);
	currentNode = currentNode.next;
}
} 

function insertFirstDLinkedList(head, data){
	if(head == null) {
	return new Node(data);
}
let newNode = new Node(data);
newNode.next = head;
head.prev = newNode;
head = newNode;
return head;
}

function insertAtEndDLinkedList(head, data){
	if(head == null) {
	return new Node(data);
}
let currentNode = head;
while(currentNode.next != null){
	currentNode = currentNode.next;
}
let newNode = new Node(data);
currentNode.next = newNode;
newNode.prev = currentNode;
currentNode = newNode;
	return head;
}

function insertAtGivenPositionDLinkedList(head, pos , data){
	if(head == null) {
	return new Node(data); 
}

let currentNode = head;
let previousNode = null;
let currentPosition = 0;
	while(currentPosition < pos){
	currentPosition++;
	previousNode = currentNode;
	currentNode = currentNode.next;
}
let newNode = new Node(data);
newNode.next = currentNode;
newNode.prev = previousNode;
previousNode.next = newNode;
currentNode.prev = newNode;

return head;

}

function insertBeforeNode(head, node, insertNode){
	if(head == null) return new Node(insertNode);
	let newNode = new Node(insertNode);
	let currentNode = head;
	let previousNode = null;
	while(currentNode.data != node){
		previousNode = currentNode;
		currentNode = currentNode.next;
}
newNode.prev = previousNode;
newNode.next = currentNode;
previousNode.next = newNode;
currentNode.prev = newNode;
return head;
}

function insertAfterNode(head, node, insertNode){
	if(head == null) return new Node(insertNode);
	let newNode = new Node(insertNode);
	let p = head;
	let q = p.next;
	while( p.data != node ){
		p = p.next;
		q = q.next;
}
newNode.prev = p;
newNode.next = q;
p.next = newNode;
q.prev = newNode;
return head;
}

function deleteFirstNode( head){
	if(head == null ) return;
	let currentNode = head;
	head = currentNode.next;
	head.prev = null;
	currentNode = null;
	return head;
}

function deleteLastNode( head){
	if(head == null ) return;
	let currentNode = head;
	let previousNode = null;
	while(currentNode.next != null){
	previousNode = currentNode;
	currentNode = currentNode.next;
}
previousNode.next = null;
currentNode = null;
return head;
}

function deleteSpecifyNode(head, node){
	if(head == null) return;
	
	let currentNode = head;
	let nextNode = currentNode.next;
	
	while(nextNode.data != node){
	currentNode = currentNode.next;
	nextNode = nextNode.next;
}

currentNode.next = nextNode.next;
nextNode.next.prev = currentNode;

return head;

}
function reverseLinkedList(head){
    if(head == null) return;

    let currentNode = head;
    // let stack = [];

    // while(currentNode != null){
    //     stack.push(currentNode.data);
	// 	currentNode = currentNode.next;
    // }
	// currentNode = head;
	// console.log("After POP")
	// while(currentNode != null){
	// 	currentNode.data  = stack.pop();
	// 	currentNode = currentNode.next;
    // }
	// return head
	let temp;
	while(currentNode != null){
		temp = currentNode.prev;
		currentNode.prev = currentNode.next;
		currentNode.next = temp;
		currentNode = currentNode.prev;
	}
	if(temp.prev != null){
		return temp.prev;
	}
	
}

let arr = [1,2,3,6,7];

console.log("Double Linked List");
let head = createDLinkedList(arr);
traversal(head);

console.log("Double Linked List Insert at first");
head = insertFirstDLinkedList(head, 12);
traversal(head);

console.log("Double Linked List Insert at last");
head = insertAtEndDLinkedList(head, 13);
traversal(head);


console.log("Double Linked List Insert at given position");
head = insertAtGivenPositionDLinkedList(head,3 ,14);
traversal(head);

console.log("Double Linked List Insert before the given node");
head = insertBeforeNode( head, 14, 43 );
traversal(head);

console.log("Double Linked List Insert after the given node");
head = insertAfterNode( head, 14, 32 );
traversal(head);

console.log("Double Linked List delete at beginning");
head = deleteFirstNode( head);
traversal(head);

console.log("Double Linked List delete at end");
head = deleteLastNode(head);
traversal(head);

console.log("Double Linked List delete from specified node");
head = deleteSpecifyNode(head, 32);
traversal(head);

console.log("Double Linked List reverse node");
head = reverseLinkedList(head);
traversal(head);