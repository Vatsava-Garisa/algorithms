/*
Description: Removes a key–value pair.
*/

let myMap = new Map([['A', 10], ['B', 20], ['C', 30]]);

let delete_1 = myMap.delete('A');
let delete_2 = myMap.delete('E');

console.log('delete_1:', delete_1);
console.log('delete_2:', delete_2);
