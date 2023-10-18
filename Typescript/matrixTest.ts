import { Matrix } from "./Matrix";

let matrix1: Matrix = new Matrix(2, 2, 10);
let matrix2: Matrix = new Matrix(2, 2, 10);
console.log(matrix1.print());
console.log(matrix2.print());
console.log(matrix1.add(matrix2));
console.log(matrix1.multNumber(10));
console.log(matrix1.multSpecial(4));
