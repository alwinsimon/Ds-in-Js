// 

function selectionSort(array){

  for(let i = 0; i< array.length - 1; i++){

    let minIndex = i;

    for(let j = i+1 ; j < array.length; j++){

      if( array[j] < array[minIndex]){

        minIndex = j;

      }

    }

    if( array[minIndex] < array[i] ){

      let temp = array[minIndex];

      array[minIndex] = array[i];

      array[i] = temp;

    }

  }
  return array;

}


// ================TEST CASES================

let arr1 = [91, 45, 93, 91, 65, 67, 40];

console.log(arr1);

console.log(selectionSort(arr1))

console.log(arr1.length);