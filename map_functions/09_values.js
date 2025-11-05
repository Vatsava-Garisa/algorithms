/*
Description: Returns an iterator with all values.
*/

let myMap = new Map([['A', 10], ['B', 20], ['C', 30]]);

let values = myMap.values();
console.log('values:', values);

for (let value of values) {
    console.log(value);
}
