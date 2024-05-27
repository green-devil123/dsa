class Node{
	constructor(data){
    	this.data = data;
    	this.next = null;
    }
}

let list = [1,2,3,4,5];

function LinkedList(list){
	let head = new Node(list[0]); 
	let currentNode = head;
    for(let i=1 ; i < list.length; i++){
    		let newNode = new Node(list[i]);
    		currentNode.next = newNode;
    		currentNode = newNode;
    }
    return head;
}

function traversalLL(head){
	let currentNode = head;
    if(currentNode != null){
        console.log(currentNode.data);
        traversalLL(currentNode.next)
    }
}

function insertAtFirst(head, data){
    let newNode = new Node(data);
    if(head == null){
        head = newNode;
        return;
    }
    newNode.next = head;
    head = newNode;
    return head;
}

function insertAtLast(head, data){
    let newNode = new Node(data);
    if(head == null) 
    {
        head = newNode; 
        return head;
    }
    let currentNode = head;
    while(currentNode.next != null){
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return head;
}

function insertionInBetween(head,pos ,data){
    let newNode = new Node(data);
    if(head == null){
        head = newNode;
        return head;
    }
    let currentPos = 0;
    let currentNode = head;
    let prev = null;
    while(currentPos < pos){
        // pos++;
        prev = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }
    if(currentNode != null)
    newNode.next = currentNode;
    if(prev != null) prev.next = newNode;
    else head = prev;
    return head;
}

function replace(head,currentData ,switchData){
    if(head == null){
        return;
    }
    let currentNode = head;
    while(currentNode.data != currentData){
        currentNode = currentNode.next;
    }
    if(currentNode == null) return head;
    currentNode.data = switchData;
    return head;
}

function deleteFromFirst(head){
	if(head == null) return;
	let currentNode = head;
	head = head.next;
	return head;
}

function deleteFromLast(head){
	if(head == null) return;
	let currentNode = head;
	let prev = null;
	while(currentNode.next != null){
		prev = currentNode;
		currentNode = currentNode.next;
}
currentNode = null;
prev.next = null;
return head;
}

function deleteFromSpecifiedNode(head, node){
	if(head == null ) return;
	let p = head;
	let q = p.next;
	while(q.data != node){
        p = p.next;
        q = p.next;
    }
    p.next = q.next;
    return head;
}

let head = LinkedList(list);
console.log("Traversal in Linked List");
traversalLL(head);

head = insertAtFirst(head, 10);
console.log("Traversal in Linked List After Insert First");
traversalLL(head);

head = insertAtLast(head, 12);
console.log("Traversal in Linked List After Insert Last");
traversalLL(head);


head = insertionInBetween(head,2, 7);
console.log("Traversal in Linked List in Between");
traversalLL(head);

head = replace(head,7, 99);
console.log("Traversal in Linked List Replace");
traversalLL(head);

head = deleteFromFirst(head);
console.log("Traversal in Linked List Delete From First");
traversalLL(head);

head = deleteFromLast(head);
console.log("Traversal in Linked List Delete From Last");
traversalLL(head);


head = deleteFromSpecifiedNode(head, 3);
console.log("Traversal in Linked List Delete From specified node");
traversalLL(head);

function reverseLinkedList(head){
	if(head == null) return;
	
	let currentNode = head;
	let temp = null;
    let previousNode = null;

    while(currentNode != null){
        temp = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = temp;
    }

    head = previousNode;
    return head;
}

head = reverseLinkedList(head)
console.log("reverse LinkedList");
traversalLL(head);



