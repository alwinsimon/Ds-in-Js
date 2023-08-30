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

    findClosestValue(target) {

        let closest = Infinity;
        
        let currentNode = this.root;

        while (currentNode) {

            if (Math.abs(currentNode.data - target) < Math.abs(closest - target)) {

                closest = currentNode.data;

            }

            if (target < currentNode.data) {

                currentNode = currentNode.left;

            } else if (target > currentNode.data) {

                currentNode = currentNode.right;

            } else {

                break;

            }

        }

        return closest;

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

console.log(tree1.findClosestValue(13)); // Output: 12
console.log(tree1.findClosestValue(6)); // Output: 5
console.log(tree1.findClosestValue(17)); // Output: 15
