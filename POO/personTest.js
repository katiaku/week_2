let { Person } = require ("./person");

let person1 = new Person("John", "Doe", 80, 1.72, ["comer", "dormir"]);
console.log(person1);
console.log(person1.calculateIMC());
console.log(person1.edad(1985));
console.log(person1.printAll());
console.log(person1.printHobbies());

module.exports = { person1 }
