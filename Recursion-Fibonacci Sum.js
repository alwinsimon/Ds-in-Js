// 


function fibonacciSum(num){

    if(num < 2){

        return num;

    }

    return fibonacciSum(num-1) + fibonacciSum(num-2);

}

let fibSum = fibonacciSum(8);

console.log(fibSum);