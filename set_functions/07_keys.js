/*
Description: Returns a new iterator object containing all the keys (same as values in a Set).
*/

let mySet = new Set(['A', 'B', 'C']);

let mySetKeys = mySet.keys();
console.log('mySetKeys:', mySetKeys);

for (let key of mySetKeys) {
    console.log(key);
}
