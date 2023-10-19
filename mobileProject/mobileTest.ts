import { Mobile } from "./mobile";

let mobile1 = new Mobile("Apple", "iPhone", "14", "amarillo", 900);

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
