abstract class Departement {
  static fiscalYear = 2020;
  protected employee: string[] = [];

  constructor(protected id: string, public name: string) {}

  abstract describe(this: Departement): void;

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends Departement {
  admins: string[];
  private static instace: ITDepartment;
  // selama tidak membuat konstruktor maka akan menggunakan constructor super class
  private constructor(id: string, admins: string[]) {
    super(id, "IT");
    // this harus di tulis setelah super
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Department : " + this.id);
  }

  static getInstances() {
    if (ITDepartment.instace) {
      return this.instace;
    }
    this.instace = new ITDepartment("2", ["Nizar"]);
    return this.instace;
  }
}

class AccountingDepartment extends Departement {
  private lastReport: string;

  // method getter harus mengembalikan sesuatu
  public get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  describe(): void {
    console.log("Accounting Department : " + this.id);
  }

  public set mostRecentReport(v: string) {
    if (!v) {
      throw new Error("Please pass in a valid value");
    }
    this.addReports(v);
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string): void {
    if (name == "Nizar") {
      return;
    }
    this.employee.push(name);
  }
}

const employee1 = Departement.createEmployee("Nizar");
console.log(employee1, Departement.fiscalYear);

const it = ITDepartment.getInstances()
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
