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

    if(currentNode == null){

      console.log("Finished Printing Stack");

      return;

    }

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


  popFromStack(){

    if(this.top == null){

      console.log("Stack Underflow");

      return;

    }else{

      this.top = this.top.next;

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