"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Nizar",
    age: 20,
    sports: ["Basketball", "Cooking"],
    gender: [2, "cowok"],
    role: Role.ADMIN
};
// push masih bisa tapi tidak dengan inisialissasinya
// person.role.push("asdas");
// person.role = [0,'asdas', 'asdas']
console.log(person.gender);
let favoriteActivities;
favoriteActivities = ["Sprots"];
for (const hobby of favoriteActivities) {
    console.log(hobby);
}
