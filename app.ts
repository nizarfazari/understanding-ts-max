type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Nizar",
  privileges: ["create-server"],
  startDate: new Date(),
};

// Union Types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a == "string" || typeof b == "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UknownEmployee = Employee | Admin;

function printEmployee(emp: UknownEmployee) {
  console.log("Name : " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges : " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("start date : " + emp.startDate);
  }
}

printEmployee(e1);

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("loading cargo");
  }
}

type Vechile = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVechile(vechile: Vechile) {
  vechile.drive();
  if (vechile instanceof Truck) {
    vechile.loadCargo(1000);
  }
}
