console.log("Your code goes here");

function add(n1: number, n2: number, showResult: boolean, phrasa: string) {
  // jika mengggunakan javascript
  //   if (typeof n1 !== "number" && typeof n1 !== "number") {
  //     throw new Error("Incorect input!");
  //   }
  const result = n1 + n2;
  if (showResult) {
    // semuanya akan di konversi ke string hasilnya : 52.8
    // console.log(phrasa + n1 + n2);
    console.log(phrasa + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const showResult = true;
const resultPhrase = "Result is : ";
console.log(add(number1, number2, showResult, resultPhrase));
