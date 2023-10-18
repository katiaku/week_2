class Person {
    constructor(firstname, lastname, weight, height, hobbies) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.weight = weight;
        this.height = height;
        this.yearOfBirth;
        this.hobbies = hobbies;
    }

    calculateIMC() {
        let imc = this.weight / (this.height * this.height);
        return imc
    }

    edad(yearOfBirth) {
        let yearNow = new Date().getFullYear();
        let age = yearNow - yearOfBirth;
        return age
    }

    printAll() {
        console.log("firstname - " + this.firstname);
        console.log("lastname - " + this.lastname);
        console.log("weight - " + this.weight);
        console.log("height - " + this.height);
        console.log("yearOfBirth - " + this.yearOfBirth);
    }

    printHobbies() {
        for (let hobby in this.hobbies) {
            console.log(this.hobbies[hobby]);
        }
    }
}

module.exports = { Person }
