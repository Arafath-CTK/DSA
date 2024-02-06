class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  insertAtIndex(data, index) {
    if (index === 0) {
      this.prepend(newNode);
    } else {
      let newNode = new Node(data);
      let current = this.head;
      let count = 0;
      while (current && count < index - 1) {
        current = current.next;
        count++;
      }
      if (current) {
        newNode.next = current.next;
        current.next = newNode;
      } else {
        console.error("Index out of bound");
      }
    }
  }

  printlist() {
    // also example for traversing
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

// Example Usage
const myList = new LinkedList();
myList.add(10);
myList.add(20);
myList.add(30);
// myList.printlist();

myList.insertAtIndex(15, 0);
myList.printlist();
