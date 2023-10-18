import { Person } from "./Person";

export const person1: Person = new Person("Pepe", 40, "Paseo de la Castellana, 123 28046 Madrid");
export const person2: Person = new Person("Ana", 30, "Paseo de la Castellana, 213 28046 Madrid");
console.log(person1);
console.log(person1.printName());
console.log(person1.yearOfBirth(2023));
console.log(person1.setAddress("Paseo de la Castellana, 125 28046 Madrid"));
console.log(person1.getAddress());
