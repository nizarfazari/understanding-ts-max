"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    static createEmployee(name) {
        return { name: name };
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
Departement.fiscalYear = 2020;
class ITDepartment extends Departement {
    // selama tidak membuat konstruktor maka akan menggunakan constructor super class
    constructor(id, admins) {
        super(id, "IT");
        // this harus di tulis setelah super
        this.admins = admins;
    }
    describe() {
        console.log("IT Department : " + this.id);
    }
}
class AccountingDepartment extends Departement {
    // method getter harus mengembalikan sesuatu
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found");
    }
    describe() {
        console.log("Accounting Department : " + this.id);
    }
    set mostRecentReport(v) {
        if (!v) {
            throw new Error("Please pass in a valid value");
        }
        this.addReports(v);
    }
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name == "Nizar") {
            return;
        }
        this.employee.push(name);
    }
}
const employee1 = Departement.createEmployee("Nizar");
console.log(employee1, Departement.fiscalYear);
const it = new ITDepartment("2", ["Nizar"]);
it.addEmployee("Nizar");
it.addEmployee("Fazari");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("4");
accounting.addReports("asdas");
accounting.mostRecentReport = "Year Final Report";
console.log(accounting.mostRecentReport);
accounting.addEmployee("Nizar");
accounting.addEmployee("Fazari");
console.log(accounting);
// accounting.employee[2] = "Anna"; => jika ingin class tidak bisa di akses dari luar, tambahkan access modifier private pada propery
// const accountingCoppy = { name : "asd" ,describe: accounting.describe };
// accountingCoppy.describe(); => akan error karena mengacu pada Kelas Object accountingCoppy jadinya harus menambahkan sebuah property
