// 

function bubbleSort(array) {

  var length = array.length;

  for (var i = 0; i < length - 1; i++) {

    swapped = false;

    for (var j = 0; j < length - 1 - i; j++) {

      if (array[j] > array[j + 1]) {

        // Swap elements
        var temp = array[j];

        array[j] = array[j + 1];

        array[j + 1] = temp;

        swapped = true;

      }

    }

    if(swapped == false){

      break;

    }

  }
  
  return array;
  
}


// ===============TEST CASE===============

let arr1 = [56,2,1,46,65,4,6,46,312,4,23,46,97,65,9,4,45]

console.table(arr1);


console.table(bubbleSort(arr1));
  