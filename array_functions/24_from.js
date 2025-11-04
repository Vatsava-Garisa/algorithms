
/*
Description: 
*/

const arr1 = Array.from('123');
console.log('arr1:', arr1);

const arr2 = Array.from('123', (item) => Number(item));
console.log('arr2:', arr2);
