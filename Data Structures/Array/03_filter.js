
/*
Description: Returns a new array containing only those elements for which the callback returns truthy value, without mutating the original value.
*/

/** NOTE
 * Returns a new array.
 * Length may be smaller.
 * Holes are removed.
 * Not promise-aware.
 * Supports thisArg. (non-arrow function)
 * Uses the intital length of the array for iterations.
 * Cannot break early.
 */

const arr = ['Apple', 'Pineapple', 'Peach', 'Banana', 'Guava'];

const filter = arr.filter((value, index, arr) => {
    return value.length > 5;
});

console.log(`arr: ${arr}`);
console.log(`filter: ${filter}`);
