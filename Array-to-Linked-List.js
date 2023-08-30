class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // =====================Methods=======================
    
    arrayToLinkedList(arr) {
      if (arr.length === 0) {
        console.log("Empty Array");
        return;
      }
  
      this.head = new Node(arr[0]);
      let current = this.head;
  
      for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
      }
  
      this.tail = current;
      return this.head;
    }
  }

  
  // Create a new singly linked list

const myList = new SinglyLinkedList();

// Test the arrayToLinkedList method

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];

console.log(myList.arrayToLinkedList(arr1)); // Output: Node { data: 1, next: Node { data: 2, next: Node { data: 3, next: Node { data: 4, next: Node { data: 5, next: null } } } } }
console.log(myList.arrayToLinkedList(arr2)); // Output: Empty Array