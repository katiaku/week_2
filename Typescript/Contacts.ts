import { Person } from "./Person";
import { person1, person2 } from "./personTest"

export class Contacts {

    public people: Person[];

    constructor() {
        this.people = [person1, person2];
    }

    public printCalendar(): Person[] {
        return this.people;
    }
}
