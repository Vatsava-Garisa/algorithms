
/* slice
Description: Returns a shallow copy of a portion of an array into a new array without mutating the original, using start an end indices.
*/

/** NOTES:
 * Non-mutating.
 * Returns shallow copy. (Primitives Types -> Deep Copy | Reference Types -> Shallow Copy)
 * Supports negative indices.
 * Safe alternative to splice.
 * 
 */

const arr = ['Apple', 'Pineapple', 'Lichi', 'Banana', 'Guava', 'Kiwi', 'Watermelon'];

// arr.slice(startIndex?, endIndex?);
const slice_1 = arr.slice();
const slice_2 = arr.slice(2);
const slice_3 = arr.slice(0, 3);

console.log('arr:', arr);
console.log(`slice_1:`, slice_1);
console.log(`slice_2:`, slice_2);
console.log(`slice_3:`, slice_3);
