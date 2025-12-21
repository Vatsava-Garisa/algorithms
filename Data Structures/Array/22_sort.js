
/*
Description: 
*/

const arr = ['Apple', 'Guava', 'Banana', 'Kiwi', 'Watermelon'];

const sort1 = arr.sort();

console.log('arr:', arr);
console.log(`sort1:`, sort1);

console.log(`--------------------------------------------------------`);

const nums = [9, 10, 29, -5, 0];

console.log('nums:', nums);

// Converts to String and then sorts
const sort2 = nums.sort();
console.log('sort2:', sort2);

const sort3 = nums.sort((a, b) => a - b);
console.log('sort3:', sort3);
