/*
Description: Checks if a value exists in the Set.
*/

let mySet = new Set([1, 2, 3]);

let exists_1 = mySet.has(3);
let exists_2 = mySet.has(30);

console.log('exists_1:', exists_1);
console.log('exists_2:', exists_2);