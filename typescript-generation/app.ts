const userName = "Nizar";

// Function
const addFunction = function () {};

// Arrow Function with default params
const addArrowFunction = (a: number, b: number = 5) => {
  return a + b;
};

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(addArrowFunction(5, 5));

// Spread Operator
const hobbies = ["Sports", "Cooking"];
const activitiesHobbies = ["Hikig"];

activitiesHobbies.push(...hobbies);
console.log(activitiesHobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = {
  ...person,
};

// Rest Parameter
const addRestParams = (...numbers: number[]) => {
  return numbers.reduce((curRes, curVal) => curRes + curVal, 0);
};

const addNumbers = addRestParams(5, 10, 2);
console.log(addNumbers);

// Destructuring pada Array dan Object

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { name: userNames, age } = person;
console.log(userNames);
