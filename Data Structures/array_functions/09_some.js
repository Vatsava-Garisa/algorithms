
/*
Description: 
*/

const arr = ['Apple', 'Pineapple', 'Apple', 'Banana', 'Guava'];

const some_1 = arr.some(item => {
    if (item.includes('a')) {
        return true;
    }
});
const some_2 = arr.some(item => item.includes('~'));

console.log(`arr: ${arr}`);
console.log(`some_1: ${some_1}`);
console.log(`some_2: ${some_2}`);
