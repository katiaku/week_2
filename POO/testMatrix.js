let { Matrix } = require ("./matrix");

let matrix1 = new Matrix(2, 2, 10);

console.log(matrix1);
console.log(matrix1.add([[1, 2], [4, 6]]));
console.log(matrix1.productNum(5));
console.log(matrix1.subs([[1, 2], [4, 5]]));
console.log(matrix1.product([[1, 2], [4, 5]]));
