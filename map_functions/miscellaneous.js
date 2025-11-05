
/* Merge Two Maps */
let map1 = new Map([
    ['A', 1],
    ['B', 2]
])
let map2 = new Map([
    ['C', 3],
    ['D', 4]
])

let merged_map = new Map([...map1, ...map2]);

console.log('Merged Map:', merged_map);

/*****************************************************************************************************************************/
/* Invert a Map (Swap keys and values) */
let map3 = new Map([
    ['A', 1],
    ['B', 2]
]);

let inverted_map = new Map([...map3].map(([key, value]) => {
    return [value, key];
}))

console.log('Inverted Map:', inverted_map);

/*****************************************************************************************************************************/
/* Filter a Map */
let map4 = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4]
]);

let filtered_map = new Map([...map4].filter(([key, value]) => {
    if (value > 2) {
        return [key, value];
    }
}));

console.log('Filtered Map:', filtered_map);

/*****************************************************************************************************************************/
/* Map Transformation */
let map5 = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4]
]);

let times_10 = new Map([...map5].map(([key, value]) => {
    return [key, value * 10];
}));

console.log('Times 10:', times_10);

/*****************************************************************************************************************************/
/* Convert Map → Array */
let map6 = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4]
]);

let array1 = Array.from(map6);

console.log('Map to Array:', array1);
/*****************************************************************************************************************************/
/* Convert Array → Map */
let array2 = [
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4]
]

let map7 = new Map(array2);

console.log('Array to Map:', map7);

/*****************************************************************************************************************************/
/* Convert Map Keys → Array */
let map8 = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4]
]);

let array3 = [...map8.keys()];

console.log('Map Keys to Array:', array3);

/*****************************************************************************************************************************/
/* Convert Map Values → Array */
let map9 = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4]
]);

let array4 = [...map9.values()];

console.log('Map Values to Array:', array4);

