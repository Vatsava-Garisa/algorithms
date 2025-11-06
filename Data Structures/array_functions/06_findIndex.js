
/*
Description: 
*/

const arr = ['Apple', 'Pineapple', 'Peach', 'Banana', 'Guava'];

const findIndex = arr.findIndex(item => {
    if (item.length == 9) {
        return item;
    }
});

console.log(`arr: ${arr}`);
console.log(`findIndex: ${findIndex}`);
