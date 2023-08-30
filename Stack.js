// ====================================STACK====================================

class Node{

  constructor(data){

    this.data = data;

    this.next = null;

  }

}

class Stack{

  constructor(){

    this.top = null;

  }


  displayStack(){

    if(this.top == null){

      console.log("Stack Underflow (Stack is empty)");

      return;

    }

    let currentNode = this.top;

    while(currentNode != null){

      console.log(currentNode.data + " ↓");

      currentNode = currentNode.next;

    }

    console.log("Finished Printing Stack");

    return;

  }


  pushToStack(data){

    let newNode = new Node(data);

    if(this.top == null){

      this.top = newNode;

    }else{

      newNode.next = this.top;

      this.top = newNode;

    }

  }


  popFromStack() {

    if (this.top == null) {

      console.log("Stack Underflow");
      return null; // Return null to indicate no value was popped.

    } else {

      let poppedValue = this.top.data; // Store the popped value.
      
      this.top = this.top.next;

      console.log(`Popped ${poppedValue} from Stack.`);
      
      return poppedValue; // Return the popped value.

    }

  }

}










// ========================Checking codes========================

let Stack1 = new Stack();

Stack1.pushToStack(10);
Stack1.pushToStack(20);
Stack1.pushToStack(30);


Stack1.displayStack();


Stack1.popFromStack();

Stack1.displayStack();