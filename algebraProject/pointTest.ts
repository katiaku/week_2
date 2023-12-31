import { Point } from "./point";

let myPoint: Point = new Point(10,15);
let myPoint2: Point = new Point(-23,-40);
let myPoint3: Point = new Point(3,-19);
let myPoint4: Point = new Point(-46,40);

let myPoints: Point[] = [myPoint2, myPoint3, myPoint4];

console.log(myPoint.getX());
console.log(myPoint.getY());

myPoint.setX(7);
myPoint.setY(9);

console.log(myPoint.getX());
console.log(myPoint.getY());

console.log(myPoint.toString());

console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(myPoint2));
console.log(myPoint2.calculateQuadrant());
console.log(myPoint.calculateNearest(myPoints));
