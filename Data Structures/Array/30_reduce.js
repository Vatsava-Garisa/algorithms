
/* reduce
Description: Iterates over an array and accumulates its elements into a single value using a reucer function, without mutating the original array.
*/

/** NOTES:
 * Returns single value.
 * Does not mutate array. (unless you do manually)
 * Requires return on each iteration.
 * Skips holes.
 * Throws on empty array without initial value.
 */

const arr = [1, 2, 3];
console.log('arr:', arr);

// array.reduce((accumulator, currentValue, index, array) => newAccumulator, initialValue ?)

// returns into a single element
const reduce_1 = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('reduce_1:', reduce_1);

// computes from left to right
const reduce_2 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
console.log('reduce_2:', reduce_2);

// removing duplicates
const unique = arr.reduce((acc, val) => {
    if (!acc.includes(val)) {
        acc.push(val);
    }
    return acc;
}, []);
