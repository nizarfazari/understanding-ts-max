console.log("Your code goes here");
function add(n1, n2, showResult, phrasa) {
    // jika mengggunakan javascript
    //   if (typeof n1 !== "number" && typeof n1 !== "number") {
    //     throw new Error("Incorect input!");
    //   }
    if (showResult) {
        console.log(phrasa + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var showResult = true;
var resultPhrase = "Result is : ";
console.log(add(number1, number2, showResult, resultPhrase));
