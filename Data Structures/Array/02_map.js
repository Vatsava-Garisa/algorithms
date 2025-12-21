
/* map
Description: Transforms each element using a callback and returns a new array of same length without mutating the original.
*/

/** NOTE:
 * Always returns a new array.
 * Length is preserved.
 * Holes are preserved.
 * Callback must return. (Undefined otherwise)
 * Async callbacks produce the Promise[].
 * Cannot break early.
 */

const arr = ['Apple', 'Pineapple', 'Peach', 'Banana', 'Guava'];

const duplicate_arr = arr.map((value, index, arr) => {
    return `${value} + ${value}`;
});

console.log(`arr: ${arr}`);
console.log(`duplicate_arr: ${duplicate_arr}`);

console.log(`--------------------------------------------------------`);

const another_arr = arr.map(function (value, index, arr) {
    return `${value} + ${this.append}`;
}, { append: 'Sree' });

console.log(`another_arr: ${another_arr}`);
