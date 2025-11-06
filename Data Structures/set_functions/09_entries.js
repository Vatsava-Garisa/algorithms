/*
Description: Returns an iterator with [value, value] pairs (for compatibility with Maps).
*/

let mySet = new Set(['A', 'B', 'C']);

let mySetEntries = mySet.entries();
console.log('mySetEntries:', mySetEntries);

for (let [key, value] of mySetEntries) {
    console.log(key, ': ', value);
}
