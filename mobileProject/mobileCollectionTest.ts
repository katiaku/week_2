import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let mobile1: Mobile = new Mobile("Apple", "iPhone", "14", "amarillo", 900);
let mobile2: Mobile = new Mobile("Xiaomi", "Redmi", "12", "azul", 160);
let mobile3: Mobile = new Mobile("Apple", "iPhone", "14", "rojo", 900);
let mobile4: Mobile = new Mobile("Samsung", "Galaxy", "S21", "negro", 900);

let mobiles: Mobile[] = [mobile1, mobile2, mobile3, mobile4];
let mobiles2: Mobile[] = [mobile3, mobile4];

let myCollection: MobileCollection = new MobileCollection(mobiles);

console.log(myCollection.getMobiles());
console.log(myCollection.getTotalPrice());

myCollection.setMobiles(mobiles2);
myCollection.setTotalPrice(1800);

console.log(myCollection.getMobiles());
console.log(myCollection.getTotalPrice());
