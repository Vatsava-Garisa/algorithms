
/*
Description: 
*/

const numbers = [1, 2, 3];
console.log('numbers:', numbers);

const result = numbers.flatMap(num => [num, num * 2]);
console.log('result:', result);


const words = ["hi", "hello"];
console.log('words:', words);

const chars = words.flatMap(word => word.split(''));
console.log('chars:', chars);


