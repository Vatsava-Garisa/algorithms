
/*
Description: 
*/

const arr = ['Apple', 'Pineapple', 'Peach', 'Banana', 'Guava'];

const find = arr.find(item => {
    if (item.length == 5) {
        return item;
    }
});

console.log(`arr: ${arr}`);
console.log(`find: ${find}`);
