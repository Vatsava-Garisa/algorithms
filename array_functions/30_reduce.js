
/*
Description: 
*/

const arr = [1, 2, 3];
console.log('arr:', arr);

// returns into a single element
const reduce_1 = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log('reduce_1:', reduce_1);

// computes from left to right
const reduce_2 = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 10);
console.log('reduce_2:', reduce_2);
