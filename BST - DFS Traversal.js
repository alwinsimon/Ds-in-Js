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

    // Traversal functions to visit each node in the binary search tree
    inOrderTraversal(node) {

        if(node){

            this.inOrderTraversal(node.left);

            console.log(node.data);

            this.inOrderTraversal(node.right);

        }

    }

    preOrderTraversal(node) {

        if(node){

            console.log(node.data);

            this.preOrderTraversal(node.left);

            this.preOrderTraversal(node.right)

        }

    }

    postOrderTraversal(node) {

        if(node){

            this.postOrderTraversal(node.left);

            this.postOrderTraversal(node.right);

            console.log(node.data);

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

tree1.inOrderTraversal(tree1.root); // 2, 5, 7, 10, 12, 15, 20
// tree1.preOrderTraversal(tree1.root); // 10, 5, 2, 7, 15, 12, 20
// tree1.postOrderTraversal(tree1.root); // 2, 7, 5, 12, 20, 15, 10
