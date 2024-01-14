// Intersection Types
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

// Instanceof Type Guards:
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

// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("moving with animal " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//  Type Casting
// default dari type ini adalah HTML element jadi haru di konversi terdapat 2 cara
// const userInputElement = <HTMLInputElement>document.getElementById("input-user") ;
const userInputElement = document.getElementById(
  "input-user"
) as HTMLInputElement;

if (userInputElement) {
  userInputElement.value = "Hiii bang";
}

// Index Properties
// jika kita tidak tahu key yang akan di tambahkan itu apa tapi tahu typenya
// misal nantinya terdapat sebuah object yang mana isinya itu
// { email : 'not valid' email', username : 'must start character' }
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not valid email",
  username: "Must character more than 1",
  // kalo key-nya itu string, angka 1 masih dapat di masukan karena di konvert menjadi string oleh ts
  1: "ini juga bisa",
};

// Union Types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

// Function Overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a == "string" || typeof b == "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// seperti ini akan error
const res = add("Nizar", "Fazari");
res.split(" ");

// Optional Chaining & Coalescing operator
const fetchUserData: {
  id: number;
  name: string;
  job?: { title: string } | null; // job sekarang bisa undefined atau null
} = {
  id: 1,
  name: "NIzar",
  // job: { title: "SE" },
};

// Gunakan optional chaining untuk menghindari kesalahan jika nilai tersebut undefined atau null
const jobTitle = fetchUserData?.job?.title;

// Tampilkan hasilnya atau fallback ke nilai default jika undefined atau null
console.log(jobTitle !== undefined ? jobTitle : "No Job Title");

// Atau gunakan nullish coalescing operator (??)
console.log(jobTitle ?? "No Job Title");

// Gunakan && untuk menghindari kesalahan jika nilai tersebut undefined atau null
console.log(fetchUserData && fetchUserData.job && fetchUserData.job.title);
