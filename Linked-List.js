// Define a Node class to represent a node in a singly linked list

class Node {
  constructor(data) {
    this.data = data; // Initialize node data
    this.next = null; // Initialize reference to the next node as null
  }
}

// Define a SLinkedList class to represent a singly linked list

class SLinkedList {

  constructor() {
    this.head = null; // Initialize the head of the list as null
    this.tail = null; // Initialize the tail of the list as null
  }
  
  // Method to add a new node to the end of the list

  addNode(data) {

    const newNode = new Node(data); // Create a new node with given data
    
    // If the list is empty, set the head as the new node
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode; // Set the next reference of the tail to the new node
    }
    
    this.tail = newNode; // Set the new node as the tail of the list
  }
  
  // Method to display the list

  display() {
    // If the list is empty, print a message and return
    if (this.head == null) {
      console.log("List is Empty");
      return;
    }
    
    let temp = this.head; // Start from the head node
    
    while (temp != null) { // Iterate through the list
      console.log(temp.data + "=>"); // Print the data of each node
      temp = temp.next; // Move to the next node
      
      if (temp == null) { // If we have reached the end of the list, print a message
        console.log("Completed printing the list");
      }
    }
  }
  
  // Method to delete a node with given data from the list

  deleteNode(data) {

    let temp = this.head; // Start from the head node
    let prev = null; // Initialize a variable to keep track of the previous node
    
    // If the head node itself contains the data to be deleted, update the head and return
    if (temp != null && temp.data == data) {
      this.head = temp.next;
      return;
    }
    
    if (this.head == null) {
      // If the list is empty, return
      this.tail = null; // Update the tail as well since there are no nodes left
    }
    
    // Iterate through the list to find the node with given data
    while (temp != null && temp.data != data) {
      prev = temp;
      temp = temp.next;
    }
    
    if (temp == null) { // If the data was not found, return
      return;
    }
    
    // If the tail node contains the data to be deleted, update the tail and return
    if (temp == this.tail) {
      this.tail  = prev;
      this.tail.next = null;
      return;
    }
    
    // Remove the node with given data by updating the next reference of the previous node
    prev.next = temp.next;
  }

  // Method to reverse a linked list

    reverseLinkedList() {
        
        let currentNode = this.head;

        this.head = this.tail;

        this.tail = currentNode;

        let nextNode = null;

        let prevNode = null;

        while (currentNode != null){

            nextNode = currentNode.next;

            currentNode.next = prevNode;

            prevNode = currentNode;

            currentNode = nextNode;
        }

    }

    countNodes(){

        let count = 0;

        if(this.head == null){

            console.log("Empty List");

            return;

        }

        let currentNode = this.head;

        while(currentNode.next != null){

            currentNode = currentNode.next;

            count++;

        }
        count++;

        let result = "The total number of nodes in the given list is: " + count;

        return result;

    }

}

// =============Creating LINKED LISTS and processing various operations in a LINKED LIST=============

// Creating two linked lists

const list1 = new SLinkedList();
const list2 = new SLinkedList();

// Add nodes to the first linked list
list1.addNode(10);
list1.addNode(20);
list1.addNode(30);
list1.addNode(40);

// Display the first linked list
// list1.display();

// Add nodes to the second linked list
list2.addNode(100);
list2.addNode(200);
list2.addNode(300);
list2.addNode(400);

// // Display the Second list
// list2.display();

// // Delete a node from the first linked list

// list2.deleteNode(300);  // Deleting the node with the value 300

// Display the Second linked list

list2.display();

// Reversing a linked list

list2.reverseLinkedList();

// Displaying the reversed linked list

list2.display();
