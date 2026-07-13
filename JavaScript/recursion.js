function countdown(num){
    if(num<=0){
        console.log("Blast off! 🚀")
        return;
    }

    console.log(num);

    countdown(num-1);
}

// countdown(10);


// Factorial

function factorial(n){
    if(n===0 || n===1){
        return 1;
    }

    return n*factorial(n-1);
}

// console.log(factorial(10));


// number increment
// function increment(n, m){
//     if(n>m){
//         return;
//     }

//     console.log(n);

//     increament(n+1, m);
// }

// increment(1, 10)

function incrementTo(n) {
    // Base Case
    if (n < 0) return;

    // Recursive Case: Go deeper first
    incrementTo(n - 1);

    // This prints AFTER the recursive call finishes, reversing the order!
    console.log(n);
}

// incrementTo(10); // Prints 0 to 10


// Fibonacci series

// returning the last element of fibonacci series
function getFibonacci(n){
    if(n===0 || n===1) return n

    return getFibonacci(n-1) + getFibonacci(n-2);
}

console.log(getFibonacci(8));

// returning array of fibonacci series
function fibonacci(n, series=[0,1]){
    if(series.length>=n) return series.slice(0, n);

    const nextNumber = series[series.length-1] + series[series.length-2];
    series.push(nextNumber);

    return fibonacci(n, series);
}

console.log(fibonacci(8));