// Code from Senior

// Javascript program to check if two BSTs Are Identical BST node
class Node {

	// Utility function to create a new Node
	constructor(data)
	{
		this.data = data;
		this.left = this.right = null;
	}
}

// Function to perform inorder traversal
function inorder(root) {

	if (root == null){

		return;

	}

	inorder(root.left);

	console.log(root.data + " ");

	inorder(root.right);

}

// Function to check if two BSTs are identical

function isIdentical(root1,root2) {

	// Check if both the trees are empty
	if (root1 == null && root2 == null) {
		
		return 1;
	}
		
	// If any one of the tree is non-empty
	// and other is empty, return false
	else if (root1 != null && root2 == null) {

		return 0;

	}else if (root1 == null && root2 != null){
		
		return 0;
	
	}else{

		// Check if current data of both trees equal
		// and recursively check for left and right subtrees
		if (root1.data == root2.data && isIdentical(root1.left, root2.left) == 1 && isIdentical(root1.right, root2.right) == 1) {

			return 1;

		}else{

			return 0;

		}
	}
}

// =================TEST CASES=================

let root1 = new Node(5);
let root2 = new Node(5);


root1.left = new Node(3);
root1.right = new Node(8);

root1.left.left = new Node(2);
root1.left.right = new Node(4);

root2.left = new Node(3);
root2.right = new Node(8);

root2.left.left = new Node(2);
root2.left.right = new Node(4);

if (isIdentical(root1, root2)==1){

	console.log("Both BSTs are identical");

}
else{

	console.log("BSTs are not identical");
	
}
