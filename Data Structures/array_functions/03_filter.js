
/*
Description: 
*/

const arr = ['Apple', 'Pineapple', 'Peach', 'Banana', 'Guava'];

const filter = arr.filter(item => {
    if (item.length > 5) {
        return item;
    }
});

console.log(`arr: ${arr}`);
console.log(`filter: ${filter}`);
