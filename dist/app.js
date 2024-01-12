"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    describe() {
        console.log(`Department ( ${this.id} ) : ` + this.name);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
class ITDepartment extends Departement {
    // selama tidak membuat konstruktor maka akan menggunakan constructor super class
    constructor(id, admins) {
        super(id, "IT");
        // this harus di tulis setelah super
        this.admins = admins;
    }
}
class AccountingDepartment extends Departement {
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("2", ["Nizar"]);
it.addEmployee("Nizar");
it.addEmployee("Fazari");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("4");
accounting.addReports("asdas");
console.log(accounting);
// accounting.employee[2] = "Anna"; => jika ingin class tidak bisa di akses dari luar, tambahkan access modifier private pada propery
// const accountingCoppy = { name : "asd" ,describe: accounting.describe };
// accountingCoppy.describe(); => akan error karena mengacu pada Kelas Object accountingCoppy jadinya harus menambahkan sebuah property
