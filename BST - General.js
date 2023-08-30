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
                    
                    // If the given data is same as the current node data, then don't insert to avoid duplicates
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

    // Searching function to find a node in the binary search tree
    searchTree(data){

        if(this.root == null){

            console.log("Empty Tree");

            return false;

        }

        let currentNode = this.root;

        while(currentNode != null){

            if(currentNode.data == data){

                return currentNode;

            }else if(data <  currentNode.data){

                currentNode = currentNode.left;

            }else{

                currentNode = currentNode.right;

            }

        }

        return false; // The search data is not found in the tree.

    }

    // Deletion function to remove a node from the binary search tree
    delete(data) {

        function findMinNode(node) {

            while (node.left !== null) {

                node = node.left;

            }
        
            return node;

        }

        function deleteNode(node, data) {

            if (node === null) {

                return null;

            }
        
            if (data === node.data) {
                
                // node has NO children
                if (node.left === null && node.right === null) {

                    return null;

                }
        
                // node has RIGHT child
                if (node.left === null) {

                    return node.right;

                }
        
                // node has LEFT child
                if (node.right === null) {

                    return node.left;

                }
        
                // node has TWO children
                let tempNode = findMinNode(node.right);

                node.data = tempNode.data;

                node.right = deleteNode(node.right, tempNode.data);

                return node;

            } else if (data < node.data) {

                node.left = deleteNode(node.left, data);

                return node;

            } else {

                node.right = deleteNode(node.right, data);

                return node;

            }

        }

        this.root = deleteNode(this.root, data);

        return this;
        
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

console.log(tree1.searchTree(15));

tree1.delete(15);

console.log(tree1.searchTree(15));