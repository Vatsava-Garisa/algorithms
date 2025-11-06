
/*
Description: 
*/

const arr = ['Pineapple', 'Banana', 'Guava'];

const every_1 = arr.every(item => {
    if (item.includes('a')) {
        return true;
    }
});
const every_2 = arr.every(item => item.includes('P'));

console.log(`arr: ${arr}`);
console.log(`every_1: ${every_1}`);
console.log(`every_2: ${every_2}`);
