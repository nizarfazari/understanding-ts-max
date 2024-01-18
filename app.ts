function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log("Logging");
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  // ini seperti membuat kembali class baru, karena decorator di bentuk saat di definisikannya sebuah class
  // sehingga jika kita membuat function ini akan terbentuk jika telah di buatnya sebuah class
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        console.log(args[0], "argumen");
        super();
        console.log("With template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("Haiii semuanya")
@withTemplate("<h1> My Person Object </h1>", "app")
class Person {
  name = "Nizar";
  constructor(angka: number) {
    console.log("Creating Constructor");
  }
}

const test = new Person(2);
console.log(test);

function Log(target: any, properyName: string | symbol) {
  console.log("Property Decorator");
  console.log(target, properyName);
}

function Log2(
  target: any,
  properyName: string,
  descriptor: TypedPropertyDescriptor<number>
) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(properyName);
  console.log(descriptor);
}

function Log3(
  target: any,
  properyName: string | symbol,
  descriptor: TypedPropertyDescriptor<(tax: number) => number>
) {
  console.log("Methhod Decorator");
  console.log(target);
  console.log(properyName);
  console.log(descriptor);
}

function Log4(target: any, properyName: string | symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(properyName);
  console.log(position);
}

class Product {
  @Log
  title: string;
  // karena  yang bisa di edit adalah price lebih enak di tambahkan _
  _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

new Product("asdsa", 2);
new Product("asdsa", 4);

function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDecriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDecriptor;
}

class Printer {
  _message = "This works!";

  @Autobind
  showMessage() {
    console.log(this._message);
  }
}

const p = new Printer();
p.showMessage();

const button2 = document.querySelector("button");
// karena addEventListener mengikat method showMessage sehingga this itu merefer ke addEventListerner
button2?.addEventListener("click", p.showMessage);
