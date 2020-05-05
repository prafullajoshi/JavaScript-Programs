/*
    Write a function that does the following:

    console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
    logs fizz instead of the number for multiples of 3
    logs buzz instead of the number for multiples of 5
    logs fizzbuzz for numbers that are multiples of both 3 and 5
*/

function FizzBuzz(number) {
    let i = 1;
    while (i <= number) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
        i++;
    }
}

// calling above function
FizzBuzz(15);