"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result " + num);
}
printResult(add(8, 4));
let combineValues;
combineValues = add;
// combineValues2 = printResult; akan salah karena di sana di definisikan 2 parameter yang bertipe number
console.log(combineValues(4, 2));
// console.log(combineValues2)
