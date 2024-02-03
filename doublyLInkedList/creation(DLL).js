class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAtIndex(data, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    let newNode = new Node(data);
    if (index === 0) {
      this.prepend(data);
      return true;
    }
    let currentNode = this.head;
    let count = 0;
    while (currentNode && count < index - 1) {
      currentNode = currentNode.next;
      count++;
    }
    newNode.next = currentNode.next;
    if (newNode.next !== null) {
      newNode.next.prev = newNode;
    } else {
      this.tail = newNode;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;

    this.length++;
    return true;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let myList = new DoublyLinkedList();
myList.append(10);
myList.append(20);
myList.append(30);
// myList.printList();

myList.insertAtIndex(25, 2);
myList.printList();
