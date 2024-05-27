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

function reverseLinkedListSize(head, k){
	if(head == null) return;
	let pos = 0;
	let currentNode = head;
	let prev = null;
	let temp = null;
	while(pos < k && currentNode != null){
	    temp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = temp; 
		pos++;
    }
	if(temp != null){
		head.next = reverseLinkedListSize(temp, k)
	}
    
    return prev;
}


let arr = [1,2,3,4,5,6,8];
let head = createSingleLinkedList(arr);
console.log("single linked list");
traversal(head);

head = reverseLinkedListSize(head, 4);
console.log("reverse single linked list");
traversal(head);
