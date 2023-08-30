// ====================================MERGE SORT====================================

function mergeSort(arr, lowIndex = 0, highIndex = arr.length - 1) {

  if (lowIndex >= highIndex){ // Base Condition for Recursion
      
    return;

  }

  const mid = Math.floor((lowIndex + highIndex) / 2);

  mergeSort(arr, lowIndex, mid); // left half

  mergeSort(arr, mid + 1, highIndex); // right half

  merge(arr, lowIndex, mid, highIndex); // merging sorted halves

}



function merge(arr, lowIndex, mid, highIndex) {

  const temp = []; // temporary array

  let left = lowIndex; // starting index of left half of arr

  let right = mid + 1; // starting index of right half of arr

  //storing elements in the temporary array in a sorted manner//
  while (left <= mid && right <= highIndex) {

  if (arr[left] <= arr[right]) {

    temp.push(arr[left]);

    left++;

  } else {

    temp.push(arr[right]);

    right++;

  }

  }

  // if elements on the left half are still left //
  while (left <= mid) {

    temp.push(arr[left]);

    left++;

  }

  // if elements on the right half are still left //
  while (right <= highIndex) {

    temp.push(arr[right]);

    right++;

  }

  // transfering all elements from temporary to arr //
  for (let i = lowIndex; i <= highIndex; i++) {

    arr[i] = temp[i - lowIndex];

  }

}



// =============================TEST CASE=============================


const arr1 = [9, 4, 7, 6, 3, 1, 5];

console.log("Before sorting array: " + arr1);

mergeSort(arr1);

console.log("After sorting array: " + arr1);