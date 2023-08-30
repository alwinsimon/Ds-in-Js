function orderAgnosticBinarySearch(array,target){

    let start = 0;
    let end = array.length - 1;

    if(array[0] <= array[end]){ // Array is sorted in Ascending Order

        while(start <= end){

            let mid = Math.floor(((start + end) / 2));
    
            if(array[mid] == target){
    
                // If the element is present in the Array
                const result = `The given target element is present in index ${mid} of the provided array.`;

                return result;
    
            }else if(target < array[mid]){
    
                end = mid - 1;
    
            }else{
    
                start = mid + 1
    
            }
    
        }
        
        // If the element is not present in the Array
        const result = `The given element: ${target} is not present in the provided array.`;

        return result;
        
    }else{ // Array is sorted in Descending Order

        while(start <= end){

            let mid = Math.floor(((start + end) / 2));

            if(array[mid] == target){

                // If the element is present in the Array
                const result = `The given target element is present in index ${mid} of the provided array.`;

                return result;

            }else if(target < array[mid]){

                start = mid + 1;

            }else{

                end = mid - 1

            }

        }    
        
        // If the element is not present in the Array
        const result = `The given element: ${target} is not present in the provided array.`;

        return result;

    }

}

let arr1 = [10,20,30,40,50,60];
let arr2 = [60,50,40,30,20,10];

const resultOfSearch = orderAgnosticBinarySearch(arr1,50);

console.log(resultOfSearch);