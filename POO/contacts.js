let { person1 } = require ("./personTest");

class Contacts {
    constructor() {
        this.persons = [person1];
    }

    printPersons() {
        for (let person of this.persons) {
            for (let attribute in person) {
                console.log(attribute)
            }
        }
    }
}

module.exports = { Contacts }
