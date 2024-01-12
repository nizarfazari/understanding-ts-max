class Departement {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Departement) {
    console.log("Department : " + this.name);
  }
}

const accounting = new Departement("Accounting");
accounting.describe();

// const accountingCoppy = { name : "asd" ,describe: accounting.describe };
// accountingCoppy.describe(); => akan error karena mengacu pada Kelas Object accountingCoppy jadinya harus menambahkan sebuah property 
