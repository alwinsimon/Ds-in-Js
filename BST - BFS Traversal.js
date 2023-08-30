// Define a Node class to represent each node in the binary search tree
class Node {

    constructor(data) {

      this.data = data;

      this.left = null;

      this.right = null;

    }

}
  
// Define the BinarySearchTree class to represent the binary search tree
class BinarySearchTree {

    constructor() {

        this.root = null;

    }

    // Insertion function to add a new node to the binary search tree
    insert(data) {

        let newNode = new Node(data);

        if (this.root === null) {

            this.root = newNode;

            return this;

        } else {

            let current = this.root;

            while (true) {

                if (data === current.data) {

                    return undefined;

                }

                if (data < current.data) {

                    if (current.left === null) {

                        current.left = newNode;

                        return this;

                    }

                    current = current.left;

                } else {

                    if (current.right === null) {

                        current.right = newNode;

                        return this;

                    }

                    current = current.right;

                }

            }

        }

    }

    // BFS Traversal function to visit each node in the binary search tree

    levelOrderTraversal() {
        /** Use the optimised queue enqueue and dequeue from queue-object.js (from replit code of code evolution) instead.
        * I've used an array for simplicity. */

        const queue = [];

        queue.push(this.root);

        while (queue.length) {

          let curr = queue.shift();

          console.log(curr.data);

          if (curr.left) {

            queue.push(curr.left);
            
          }

          if (curr.right) {

            queue.push(curr.right);

          }

        }
    }


}

// =================================TEST CASES=================================

let tree1 = new BinarySearchTree();

tree1.insert(10);
tree1.insert(5);
tree1.insert(15);
tree1.insert(2);
tree1.insert(7);
tree1.insert(12);
tree1.insert(20);

tree1.levelOrderTraversal(); // 10, 5, 15, 2, 7, 12, 20
