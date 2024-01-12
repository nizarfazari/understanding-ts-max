class Departement {
  private employee: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Departement) {
    console.log(`Department ( ${this.id} ) : ` + this.name);
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

const accounting = new Departement("2", "Accounting");

accounting.addEmployee("Nizar");
accounting.addEmployee("Fazari");

// accounting.employee[2] = "Anna"; => jika ingin class tidak bisa di akses dari luar, tambahkan access modifier private pada propery

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCoppy = { name : "asd" ,describe: accounting.describe };
// accountingCoppy.describe(); => akan error karena mengacu pada Kelas Object accountingCoppy jadinya harus menambahkan sebuah property
