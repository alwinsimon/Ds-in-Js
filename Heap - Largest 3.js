// ======================LARGEST THREE NUMBERS======================

function heapSort(arr) {

    // Build Max Heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {

      heapify(arr, i, arr.length);

    }
  
    // Heap Sort
    for (let i = arr.length - 1; i > 0; i--) {

      // Swap the root element (max value) with the last element
      [arr[0], arr[i]] = [arr[i], arr[0]];
      
      // Heapify the reduced heap
      heapify(arr, 0, i);

    }
  
    return arr;

}
  
function heapify(arr, rootIndex, size) {

    let largestIndex = rootIndex;

    let leftChildIndex = 2 * rootIndex + 1;

    let rightChildIndex = 2 * rootIndex + 2;
  
    if (leftChildIndex < size && arr[leftChildIndex] > arr[largestIndex]) {

      largestIndex = leftChildIndex;

    }
  
    if (rightChildIndex < size && arr[rightChildIndex] > arr[largestIndex]) {

      largestIndex = rightChildIndex;

    }
  
    if (largestIndex !== rootIndex) {

      // Swap the root with the largest element
      [arr[rootIndex], arr[largestIndex]] = [arr[largestIndex], arr[rootIndex]];
  
      // Recursively heapify the affected sub-tree
      heapify(arr, largestIndex, size);

    }

}
  
function findLargestThree(arr) {

    let sortedArr = heapSort(arr);

    let len = sortedArr.length;
    
    if (len < 3) {

      return sortedArr;

    } else {

      return [sortedArr[len - 1], sortedArr[len - 2], sortedArr[len - 3]];

    }

}
  

// ======================TEST CASES======================

let unsortedArr = [5, 8, 3, 11, 6, 9];

let largestThree = findLargestThree(unsortedArr); 

console.log(largestThree); // Output: [11, 9, 8]  