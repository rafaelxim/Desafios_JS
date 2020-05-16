// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/accumulate.md

const accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)],[]);



console.log(accumulate(1, 3, 1, 2)); // [1, 4, 5, 7]
console.log(accumulate(1, 5, 20, 40)); // [1, 6, 26, 66]
console.log(accumulate(1, 5, 20, 40, 1, 5)); // [1, 6, 26, 66, 67, 72]
console.log(accumulate(1, 2, 352)); // [1, 3, 355]
console.log(accumulate(1, 50, 0)); // [1, 51, 51]
console.log(accumulate(30, 80, 999)); // [30, 110, 1109]

//https://stackoverflow.com/questions/6682997/what-is-the-purpose-of-a-plus-symbol-before-a-variable

// unary operator (+)
// Numbers will not be altered.
// A string notation of a number e.g '3' is converted to that number (3).
// Boolean value true is converted to a 1 and false to 0.
// Other types e.g functions and objects are converted to NaN.