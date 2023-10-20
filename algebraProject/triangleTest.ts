import { Triangle } from "./triangle";
import { Point } from "./point";

let point1: Point = new Point(10,15);
let point2: Point = new Point(-23,-40);
let point3: Point = new Point(20,-19);

let myTriangle: Triangle = new Triangle(point1, point2, point3);

console.log(myTriangle.calculateLengthSides());
