
// Defining Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
  
// Defining Singly Linked List class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // =====================Methods=======================
  
  arrayToLinkedList(arr) {

    if (arr.length === 0) {
      const result = "Provided Array is a Empty Array";
      return result;
    }

    this.head = new Node(arr[0]);
    let current = this.head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
    }

    // Update the Tail node with the new tail
    this.tail = current;

    // Return the Linked List
    return this;

  }
}





// Create a new singly linked list
const myList = new SinglyLinkedList();

// Test the arrayToLinkedList method

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];

console.log(myList.arrayToLinkedList(arr1)); // Output: Node { data: 1, next: Node { data: 2, next: Node { data: 3, next: Node { data: 4, next: Node { data: 5, next: null } } } } }
console.log(myList.arrayToLinkedList(arr2)); // Output: Empty Array