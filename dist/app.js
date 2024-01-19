"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log("Logging");
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    // ini seperti membuat kembali class baru, karena decorator di bentuk saat di definisikannya sebuah class
    // sehingga jika kita membuat function ini akan terbentuk jika telah di buatnya sebuah class
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                console.log(args[0], "argumen");
                super();
                console.log("With template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor(angka) {
        this.name = "Nizar";
        console.log("Creating Constructor");
    }
};
Person = __decorate([
    Logger("Haiii semuanya"),
    withTemplate("<h1> My Person Object </h1>", "app")
], Person);
const test = new Person(2);
console.log(test);
function Log(target, properyName) {
    console.log("Property Decorator");
    console.log(target, properyName);
}
function Log2(target, properyName, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(properyName);
    console.log(descriptor);
}
function Log3(target, properyName, descriptor) {
    console.log("Methhod Decorator");
    console.log(target);
    console.log(properyName);
    console.log(descriptor);
}
function Log4(target, properyName, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(properyName);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
new Product("asdsa", 2);
new Product("asdsa", 4);
function Autobind(target, methodName, descriptor) {
    // menampung function asli
    const originalMethod = descriptor.value;
    const adjDecriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // this ini akan mengacu pada object tempat kita mendefinisakn bukan di event listener
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDecriptor;
}
class Printer {
    constructor() {
        this._message = "This works!";
    }
    showMessage() {
        console.log(this._message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
p.showMessage();
const button2 = document.querySelector("button");
// karena addEventListener mengikat method showMessage sehingga this itu merefer ke addEventListerner
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    console.log(priceEl);
    const title = titleEl.value;
    const price = +priceEl.value;
    const createCourse = new Course(title, price);
    if (!validate(createCourse)) {
        alert("Invalid input, pls try again");
        return;
    }
    console.log(createCourse);
});

