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

    isBST(root, min, max) {

        if (!root) {

          return true;

        }

        return (root.data > min && root.data < max && this.isBST(root.left, min, root.data) && this.isBST(root.right, root.data, max));

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

console.log(tree1.isBST(tree1.root, -Infinity, Infinity)); // Output: true