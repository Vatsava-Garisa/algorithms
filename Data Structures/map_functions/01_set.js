/*
Description: Adds or updates an element with a specified key and value.
*/

let myMap = new Map([['A', 10], ['B', 20], ['C', 30]]);

myMap.set('D', 40);
myMap.set('D', 50);

console.log('myMap: ', myMap);
