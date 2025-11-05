/*
Description: Checks whether a key exists in the map.
*/

let myMap = new Map([['A', 10], ['B', 20], ['C', 30]]);

let has_1 = myMap.has('A');
let has_2 = myMap.has('E');

console.log('has_1:', has_1);
console.log('has_2:', has_2);
