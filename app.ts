function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Nizar";
  constructor() {
    console.log("Creating Constructor");
  }
}

const pers = new Person();
console.log(pers);
