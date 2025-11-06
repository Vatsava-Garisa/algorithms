/*
Description: Returns an iterator of values (identical to keys()).
*/

let mySet = new Set(['A', 'B', 'C']);

let mySetValues = mySet.values();
console.log('mySetValues:', mySetValues);

for (let key of mySetValues) {
    console.log(key);
}
