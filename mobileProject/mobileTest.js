"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var mobile1 = new mobile_1.Mobile("Apple", "iPhone", "14", "amarillo", 900);
var mobile2 = new mobile_1.Mobile("Xiaomi", "Redmi", "12", "azul", 160);
var mobile3 = new mobile_1.Mobile("Apple", "iPhone", "14", "rojo", 900);
var myMobiles = [mobile1, mobile2, mobile3];
console.log(mobile1.getName());
console.log(mobile1.getTrademark());
console.log(mobile1.getModel());
console.log(mobile1.getColor());
console.log(mobile1.getPrice());
mobile1.setName("Samsung");
mobile1.setTrademark("Galaxy");
mobile1.setModel("S21");
mobile1.setColor("rosa");
mobile1.setPrice(300);
console.log(mobile1.getName());
console.log(mobile1.getTrademark());
console.log(mobile1.getModel());
console.log(mobile1.getColor());
console.log(mobile1.getPrice());
console.log(mobile1.printData());
for (var _i = 0, myMobiles_1 = myMobiles; _i < myMobiles_1.length; _i++) {
    var mobile = myMobiles_1[_i];
    console.log(mobile.printData());
}
