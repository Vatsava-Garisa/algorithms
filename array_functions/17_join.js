
/*
Description: 
*/

const arr = ['Apple', 'Pineapple'];

const noSeparator = arr.join();
const emptySpace = arr.join('');
const anySeparator = arr.join(' ***** ');

console.log('arr:', arr);
console.log(`noSeparator:`, noSeparator);
console.log(`emptySpace:`, emptySpace);
console.log(`anySeparator:`, anySeparator);
