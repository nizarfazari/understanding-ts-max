const userName = "Nizar";

// Function
const addFunction = function () {};

// Arrow Function
const addArrowFunction = (a: number , b : number) => {
  return a + b;
};

const printOutput: (a: number | string) => void = (output) =>
  (console.log(output))

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}


printOutput(addArrowFunction(5, 5))

