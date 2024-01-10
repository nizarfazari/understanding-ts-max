// custom type
type Combinable = number | string; // union type
type ConversionDesc = "as-number" | "as-text"; // literal type

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDesc
) {
  let res;
  if (
    (typeof input1 == "number" && typeof input2 == "number") ||
    resultConversion === "as-number"
  ) {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }

  return res;
}



console.log(combine(30, 26, "as-number"));
console.log(combine("30", "26", "as-number"));
console.log(combine("Nizar", "Max", "as-text"));
