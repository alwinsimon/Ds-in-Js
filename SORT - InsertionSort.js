// 

function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {

    let current = array[i];

    let j = i - 1;

    while (j >= 0 && array[j] > current) {

      array[j + 1] = array[j];

      j--;

    }
    
    array[j + 1] = current;

  }

  return array;
  
}

// Test the function with an example array
let arr1 = [30,18,19,24,16,3,5];
console.log(insertionSort(arr1));
  