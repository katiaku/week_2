import { Book } from "./Book";

export class Library {

    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getManager(): string {
        return this.manager;
    }

    public setManager(manager: string): void {
        this.manager = manager;
    }

    public toString(): string {
        let stringArr: string[] = [];
        for (let i = 0; i < this.books.length; i++) {
            stringArr.push("Book" + [i + 1]+ ":\n" + this.books[i].toString())
        }
        return stringArr.toString();
    }

    public getNumberOfBooks(): number {
        return this.books.length;
    }

    public findByAuthor(author: string): Book[] {
        let booksAuthor: Book[] = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() === author) {
                booksAuthor.push(this.books[i]);
            }
        }
        return booksAuthor;
    }

}
