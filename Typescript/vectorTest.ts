import { Vector } from "./Vector";

let elements1: Vector = new Vector(5, 10);

console.log(elements1.print());
console.log(elements1.add([2, 3, 4, 5, 6]));
console.log(elements1.subs([1, 10, 15, 41, 11]));
console.log(elements1.mult([10, 100, 1, 2, 5]));
console.log(elements1.multNumber(2));
