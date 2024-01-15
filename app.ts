function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log("Logging");
    console.log(constructor);
  };
}

@Logger("Haiii semuanya")
class Person {
  name = "Nizar";
  constructor() {
    console.log("Creating Constructor");
  }
}

const pers = new Person();
console.log(pers);
