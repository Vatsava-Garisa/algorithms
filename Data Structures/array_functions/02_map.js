
/*
Description: 
*/

const arr = ['Apple', 'Pineapple', 'Peach', 'Banana', 'Guava'];

const duplicate_arr = arr.map(item => {
    return `${item} + ${item}`;
});

console.log(`arr: ${arr}`);
console.log(`duplicate_arr: ${duplicate_arr}`);
