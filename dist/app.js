"use strict";
const names = ["max", "nziar"];
// kita bisa memberitahu typescript kalo hasilnya adalah string
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("this is done");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
// Creating Generic in Function
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "nizar", hobbies: ["test"] }, { age: 20 });
const mergeObj2 = merge({ name: "nizar" }, { age: 20 });
const mergeObj3 = merge({ name: "nizar" }, { age: 20 });
console.log(mergeObj);
console.log(mergeObj);
function countAndDescribe(el = {}) {
    let desc = "Got no value";
    if (el.length === 1) {
        desc = "got 1 element";
    }
    else if (el.length > 1) {
        desc = "Got " + el.length + "element";
    }
    return [el, desc];
}
console.log(countAndDescribe("Hi there "));
console.log(countAndDescribe());
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    id: 1,
    name: "John",
    email: "john@example.com",
};
console.log(getProperty(user, "name"));
// class generic
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Nizar");
textStorage.addItem("Faza");
textStorage.removeItem("Nizar");
console.log(textStorage);
const numberStorage = new DataStorage();
// tidak cocok untuk object  function ini lebih cocok pada type primitif
// const objStorage = new DataStorage<object>()
// const names1 = {name : 'max'}
// objStorage.addItem(names1)
// objStorage.addItem({name : 'maxasdas'})
// objStorage.removeItem(names1)
// console.log(objStorage)
