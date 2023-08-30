// ====================================QUEUE====================================

class Node{

  constructor(data){

    this.data = data;

    this.next = null;

  }
  
}
class Queue{

  constructor(){

    this.front = null;

    this.rear = null;

  }

  displayQueue(){

    if(this.front === null){

      console.log("The given Queue is Empty.");

      return;

    }

    let currentNode = this.front;
    
    while(currentNode!= null){

      console.log(currentNode.data + " ↑");

      currentNode = currentNode.next;

    }

    console.log("Completed printing the Queue");

  }

  enqueue(data){

    let newNode = new Node(data);

    if(this.rear === null){

      this.rear = newNode;  // Setting the first Node as front and rear
      this.front = newNode; // Setting the first Node as front and rear

      return;

    }

    // If the queue is not empty, add the new Node to the rear of the queue
    this.rear.next = newNode;

    // Update the rear to be the new Node, making it the new last element in the queue
    this.rear = newNode;

  }

  dequeue(){

    if(this.front === null){

      console.log("The given Queue is Empty.");

      return;

    }

    const removedElement = this.front.data;

    this.front = this.front.next;

    if(this.front == null){

      this.rear = null;

    }

    console.log("Removed element from the Queue:", removedElement);
    return removedElement; // Return the removed element

  }

}
  

  
// ========================Checking codes========================

let Queue1 = new Queue();

Queue1.enqueue(10);
Queue1.enqueue(20);
Queue1.enqueue(30);


Queue1.displayQueue();

Queue1.dequeue();

Queue1.displayQueue();