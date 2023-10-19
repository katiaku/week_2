import { Point } from "./point";

let myPoint: Point = new Point(10,15);

console.log(myPoint.getX());
console.log(myPoint.getY());

myPoint.setX(7);
myPoint.setY(9);

console.log(myPoint.getX());
console.log(myPoint.getY());

console.log(myPoint.toString());
