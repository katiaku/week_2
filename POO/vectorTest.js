let { Vector } = require ("./vector");

let vector1 = new Vector(5, 10);

console.log(vector1);
console.log(vector1.add([1, 1, 1, 1, 1]));
console.log(vector1.productNum(5));
console.log(vector1.subs([10, 10, 10, 10, 10]));
console.log(vector1.product([2, 2, 2, 2, 2]))
