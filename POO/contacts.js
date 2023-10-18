class Contacts {
    constructor(persons) {
        this.persons = persons;
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
