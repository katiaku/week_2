import { Library } from "./Library";
import { book1, book2 } from "./bookTest";

let library1: Library = new Library([book1, book2], "Paseo de la Castellana, 125 28046 Madrid", "Pepe Soto");
console.log(library1.getAddress());
library1.setAddress("Paseo de la Castellana, 100 28046 Madrid");
console.log(library1.getManager());
library1.setManager("Iván Rubio");
console.log(library1.toString());
console.log(library1.getNumberOfBooks());
console.log(library1.findByAuthor("Walter Isaacson"));
