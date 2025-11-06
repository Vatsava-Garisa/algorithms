
/* Merge Two Sets */
let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

let merged_set = new Set([...set1, ...set2]);

console.log('Merged Set:', merged_set);

/*****************************************************************************************************************************/
/* Convert Set → Array */
let set3 = new Set([1, 2, 3]);

let array1 = Array.from(set3.keys());
// let array1 = [...set3];

console.log('Set → Array:', array1);

/*****************************************************************************************************************************/
/* Convert Array → Set */
let array3 = [1, 2, 3];

let set4 = new Set(array3);

console.log('Array → Set:', set4);

/*****************************************************************************************************************************/
/* Convert Set → String */
let set5 = new Set([1, 2, 3]);

let str = [...set5].join();

console.log('Set → String:', str);

