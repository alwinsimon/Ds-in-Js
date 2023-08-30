class MaxHeap {

  constructor() {

    this.heap = [];

  }

  // function to get parent index
  getParentIndex(index) {

    return Math.floor((index - 1) / 2);

  }

  // function to get left child index
  getLeftChildIndex(index) {

    return 2 * index + 1;

  }

  // function to get right child index
  getRightChildIndex(index) {

    return 2 * index + 2;

  }

  // function to swap two elements in the heap
  swap(index1, index2) {

    const temp = this.heap[index1];

    this.heap[index1] = this.heap[index2];

    this.heap[index2] = temp;

  }

  // function to heapify up
  heapifyUp(index) {

    const parentIndex = this.getParentIndex(index);

    if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {

      this.swap(index, parentIndex);

      this.heapifyUp(parentIndex);
      
    }

  }

  // function to heapify down
  heapifyDown(index) {

    const leftChildIndex = this.getLeftChildIndex(index);

    const rightChildIndex = this.getRightChildIndex(index);

    let maxIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {

      maxIndex = leftChildIndex;

    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {

      maxIndex = rightChildIndex;

    }

    if (maxIndex !== index) {

      this.swap(index, maxIndex);

      this.heapifyDown(maxIndex);

    }
    
  }

  // function to insert an element in the heap
  insert(value) {

    this.heap.push(value);

    this.heapifyUp(this.heap.length - 1);

  }

  // function to remove the maximum element from the heap
  remove() {

    if (this.heap.length === 0) {

      return null;

    }

    if (this.heap.length === 1) {

      return this.heap.pop();

    }

    const max = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.heapifyDown(0);

    return max;

  }

  // function to perform heap sort
  heapSort() {

    const sortedArray = [];

    while (this.heap.length > 0) {

      sortedArray.push(this.remove());

    }

    return sortedArray;

  }

  // function to build heap from an array
  buildHeapFromArray(array) {

    this.heap = array;

    const firstNonLeafIndex = Math.floor((array.length - 2) / 2);

    for (let i = firstNonLeafIndex; i >= 0; i--) {

      this.heapifyDown(i);

    }

  }
    
}
  

  
// ==================TEST CASES==================

const maxHeap = new MaxHeap();

maxHeap.buildHeapFromArray([3, 7, 2, 1, 9, 8]);

console.log(maxHeap.heap); // [9, 7, 8, 1, 3, 2]

console.log(maxHeap.remove()); // 9

console.log(maxHeap.heap); // [8, 7, 2, 1, 3]

console.log(maxHeap.heapSort()); // [1, 2, 3, 7, 8]
  