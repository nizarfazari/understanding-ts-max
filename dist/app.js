"use strict";
class Departement {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department : " + this.name);
    }
}
const accounting = new Departement("Accounting");
accounting.describe();
const accountingCoppy = { describe: accounting.describe };
accounting.describe();
