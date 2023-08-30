// ====================================QUICK SORT====================================

function quickSort(arr, lowIndex = 0, highIndex = arr.length - 1) {

    if (lowIndex < highIndex) {

      const pivotIndex = partition(arr, lowIndex, highIndex);

      quickSort(arr, lowIndex, pivotIndex - 1);

      quickSort(arr, pivotIndex + 1, highIndex);

    }
    return arr;
}
  
function partition(arr, lowIndex, highIndex) {

    const pivot = arr[highIndex];

    let i = lowIndex - 1;

    for (let j = lowIndex; j < highIndex; j++) {

        if (arr[j] <= pivot) {

            i++;

            [arr[i], arr[j]] = [arr[j], arr[i]];

        }

    }

    [arr[i + 1], arr[highIndex]] = [arr[highIndex], arr[i + 1]];

    return i + 1;
}


let arr1 = [5, 9, 2, 65, 5];

quickSort(arr1);

console.log(arr1);