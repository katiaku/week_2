import { Mobile } from "./mobile";

let mobile1: Mobile = new Mobile("Apple", "iPhone", "14", "amarillo", 900);
let mobile2: Mobile = new Mobile("Xiaomi", "Redmi", "12", "azul", 160);
let mobile3: Mobile = new Mobile("Apple", "iPhone", "14", "rojo", 900);

let myMobiles: Mobile[] = [mobile1, mobile2, mobile3];

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

for (let mobile of myMobiles) {
    console.log(mobile.printData());
}
