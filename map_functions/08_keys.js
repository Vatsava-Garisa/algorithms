/*
Description: Returns an iterator with all keys in insertion order.
*/

let myMap = new Map([['A', 10], ['B', 20], ['C', 30]]);

let keys = myMap.keys();
console.log('keys:', keys);

for (let key of keys) {
    console.log(key);
}
