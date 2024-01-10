enum Role {
  ADMIN,READ_ONLY,AUTHOR
}

const person: {
  name: string;
  age: number;
  sports: string[];
  gender: [number, string]; // tuples
  role : Role
} = {
  name: "Nizar",
  age: 20,
  sports: ["Basketball", "Cooking"],
  gender: [2, "cowok"],
  role :  Role.ADMIN
};
// push masih bisa tapi tidak dengan inisialissasinya
// person.role.push("asdas");
// person.role = [0,'asdas', 'asdas']

console.log(person.gender);
let favoriteActivities: string[];
favoriteActivities = ["Sprots"];

for (const hobby of favoriteActivities) {
  console.log(hobby);
}
