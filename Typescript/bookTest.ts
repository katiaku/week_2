import { Book } from "./Book";

export const book1: Book = new Book("Código Limpio", 464, "9788441532106", "Robert C. Martin", "Anaya Multimedia");
export const book2: Book = new Book("Elon Musk", 736, "9788419399304", "Walter Isaacson", "Debate");
console.log(book1.getTitle());
console.log(book1.getNPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());
book1.setTitle("Clean Code");
book1.setNPages(465);
book1.setIsbn("9780132350884");
book1.setAuthor("Uncle Bob");
book1.setEditorial("Pearson");
console.log(book1.toString());
