function orderAgnosticBinarySearch(array,target){

    let start = 0;
    let end = array.length - 1;

    if(array[0] <= array[end]){

        while(start <= end){

            let mid = Math.floor(((start + end) / 2));
    
            if(array[mid] == target){
    
                console.log(mid);
    
                return mid;
    
            }else if(target < array[mid]){
    
                end = mid - 1;
    
            }else{
    
                start = mid + 1
    
            }
    
        }
        // If the element is not present in the Array
        // Console log after the While loop

        console.log("The given element is not present in the array");

        return -1;
        
    }else{

        while(start <= end){

            let mid = Math.floor(((start + end) / 2));

            if(array[mid] == target){

                console.log(mid);

                return mid;

            }else if(target < array[mid]){

                start = mid + 1;

            }else{

                end = mid - 1

            }

        }    
        
        // If the element is not present in the Array
        // Console log after the While loop
    
        console.log("The given element is not present in the array");

        return -1;

    }

}

let arr1 = [10,20,30,40,50,60];
let arr2 = [60,50,40,30,20,10];

let result = orderAgnosticBinarySearch(arr1,50);
console.log(result);