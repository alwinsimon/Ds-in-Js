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

    if(this.front == null){

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

    let newNode = new Node();

    newNode.data = data;

    if(this.rear ==null){

      this.rear = newNode;  // Setting the first Node as front and rear
      this.front = newNode; // Setting the first Node as front and rear

      return;

    }

    this.rear.next = newNode;

    this.rear = newNode;

  }

  dequeue(){

    if(this.front == null){

      console.log("The given Queue is Empty.");

      return;

    }

    this.front = this.front.next;

    if(this.front == null){

      this.rear = null;

    }

    console.log("Removed an element from the Queue");

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