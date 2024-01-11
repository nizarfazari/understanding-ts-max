const userName = "Nizar";

// Function
const addFunction = function () {};

// Arrow Function with default params
const addArrowFunction = (a: number , b : number = 5) => {
  return a + b;
};

const printOutput: (a: number | string) => void = (output) =>
  (console.log(output))

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}


printOutput(addArrowFunction(5, 5))

