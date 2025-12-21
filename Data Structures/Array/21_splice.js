
/* splice
Description: Mutates an array by removing, replacing, or inserting elements at a specified index and returns the removed elements.
*/

/** NOTES:
 * Mutates original array.
 * Returns array of removed elements.
 * Supports negative start.
 * Can change array length dynamically.
 */

const arr = ['Apple', 'Pineapple', 'Lichi', 'Banana', 'Guava'];

// arr.splice(start, removeCount?, insert1, insert2, insert3,....);
const splice_1 = arr.splice(0);
// const splice_2 = arr.splice();
// const splice_3 = arr.splice(0, 3);
// const splice_4 = arr.splice(0, 1, 'Kiwi', 'Watermelon');

console.log('arr:', arr);
console.log(`splice_1:`, splice_1);
