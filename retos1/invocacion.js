var invocIsEven = require("./condicionales");
var invocAdd = require("./buclesFor");
var arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var arr3 = ["Venezuela", "Veneno", "Voltaje"];
var suma1 = invocAdd.add(arr1);
var suma2 = invocAdd.add(arr2);
var suma3 = invocAdd.add(arr3);
console.log(suma1);
invocIsEven.isEven(suma1);
console.log(suma2);
invocIsEven.isEven(suma2);
console.log(suma3);
invocIsEven.isEven(suma3);