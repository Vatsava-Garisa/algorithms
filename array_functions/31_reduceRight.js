
/*
Description: 
*/

const arr = [1, 2, 3];
console.log('arr:', arr);

// returns into a single element
const reduceRight_1 = arr.reduceRight((previousValue, currentValue) => previousValue + currentValue);
console.log('reduceRight_1:', reduceRight_1);

// computes from right to left
const reduceRight_2 = arr.reduceRight((previousValue, currentValue) => previousValue + currentValue, 0);
console.log('reduceRight_2:', reduceRight_2);
