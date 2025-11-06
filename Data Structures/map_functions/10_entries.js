/*
Description: Returns an iterator with [key, value] pairs (default iterator).
*/

let myMap = new Map([['A', 10], ['B', 20], ['C', 30]]);

let entries = myMap.entries();
console.log('entries:', entries);

for (let [key, value] of entries) {
    console.log(key, ':', value);
}
