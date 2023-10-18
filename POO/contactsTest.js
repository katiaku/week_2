let { Contacts } = require ("./contacts");
let { person1 } = require ("./personTest");

let contacts1 = new Contacts([person1]);
console.log(contacts1);
contacts1.printPersons();
