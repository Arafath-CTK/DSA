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

  add(data) {
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

  printlist() {
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
myList.add(30);
myList.add(20);

myList.printlist();
