
/*
Description: 
*/

const arr = [1, 2, 3, [4, [5, [6]]]];
console.log('arr:', arr);

const flat_1 = arr.flat();
console.log('flat_1:', flat_1);

const flat_2 = arr.flat(3);
console.log('flat_2:', flat_2);
