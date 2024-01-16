function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log("Logging");
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('With template')
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("Haiii semuanya")
@withTemplate("<h1> My Person Object </h1>", "app")
class Person {
  name = "Nizar";
  constructor() {
    console.log("Creating Constructor");
  }
}

const pers = new Person();
console.log(pers);
