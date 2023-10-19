const invocIsEven = require("./condicionales");
const invocAdd = require("./buclesFor");

let arr1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arr3: string[] = ["Venezuela", "Veneno", "Voltaje"];

let suma1: number = invocAdd.add(arr1);
let suma2: number = invocAdd.add(arr2);
let suma3: number = invocAdd.add(arr3);

console.log(suma1);
invocIsEven.isEven(suma1);
console.log(suma2);
invocIsEven.isEven(suma2);
console.log(suma3);
invocIsEven.isEven(suma3);
