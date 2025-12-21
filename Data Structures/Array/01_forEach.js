
/* forEach
Description: Executes a provied callback once for each element in iteration order, does not return a value, cannot be exited early, and is not promise-aware.
*/

/** NOTE
 * You cannot break, return, or continue. (Only valid inside of callback not the forEach)
 * Captures the array length at start. Newly added elements are ignored.
 * Skips any empty slots or holes.
 * Not promise-aware. Execution is not blocked.
 * Mutates the original array when directly modified.
 * Always returns undefined.
 * for loop is faster than forEach beacause it doesn't has callback overhead and no early exit.
 */

const arr = ['Apple', 'Pineapple', 'Peach', 'Banana', 'Guava'];

arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

console.log(`------------------------------------------------------`);

const myObj = { multiplier: 3 };
const numsArr = [1, 2, 3, 4, 5];

numsArr.forEach(function (value, index, arr) {
    console.log(value * this.multiplier);
}, myObj);
