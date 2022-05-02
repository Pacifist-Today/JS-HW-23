"use strict"

//Task #1

const factorial = num => {
    if (num === 1 || num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(3))

//Task #2

const power = (num, deg) => {
    if (deg === 1) {
        return num
    }   else {
        return num * power(num,deg - 1)
    }
}

console.log(power(3,4))

//Task #3

// const calculator = (a, b) => {
//     if (b !== 0) {
//         a++
//         b--
//         return calculator(a, b)
//     }   else {
//         return a
//     }
// }

const calculator = (a, b) => {
    if (a >= 0 && Number.isInteger(a) && b >= 0 && Number.isInteger(b)) {
        if (b !== 0) {
            a++
            b--
            return calculator(a, b)
        }   else {
            return a
        }
    }   else  {
        return "Error! Enter positive integers!"
    }
}

console.log(calculator(4,5))