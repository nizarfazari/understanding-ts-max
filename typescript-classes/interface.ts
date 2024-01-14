interface Hobbies {
  // optional di tandai tanda tanya dan dapat menambahkan readonly
  readonly hobbies?: string;
}

interface Greetable extends Hobbies {
  name: string;
  age: number;

  greet(phrase: string): void;
}

const person1: Greetable = {
  name: "Nizar",
  age: 20,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

class Person implements Greetable {
  name: string;
  age: number;
  hobbies: string = "Mengammbar";

  constructor(name: string, age: number = 5) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string): void {
    console.log(phrase + this.name + "Umur saya " + this.age);
  }
}

person1.greet("Ni haooo ");
const user2 = new Person("Nizar", 5);
user2.greet("Halooo nama saya ");
