

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(...args) {
        if (args.length == 0) return;

        for (let i = 0; i < args.length; i++) {
            this.data[this.length] = args[i];
            this.length++;
        }

        return args;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        if (this.length == 0) return;

        const last_element = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return last_element;
    }

    shift() {
        if (this.length == 0) return;

        const first_element = this.data[0];

        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return first_element;
    }

    unshift(item) {
        if (this.length == 0) {
            return this.push(item);
        }

        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
    }

    deleteByIndex(index) {
        if (this.length == 0 || index >= this.length) return;
        const element = this.data[index];

        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return element;
    }

    forEach(func) {
        if (!this.length) return;

        for (let i = 0; i < this.length; i++) {
            func(this.data[i]);
        }
    }

    filter(func) {
        if (!this.length) return;

        let newArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            let exists = func(this.data[i]);
            if (exists) {
                newArray.push(this.data[i]);
            }
        }

        return newArray;
    }

    map(func) {
        if (!this.length) return;

        let newArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            let value = func(this.data[i]);
            newArray.push(value);
        }

        return newArray;
    }

    find(func) {
        if (!this.length) return;

        for (let i = 0; i < this.length; i++) {
            let exists = func(this.data[i]);
            if (exists) return this.data[i];
        }

        return;
    }

    findIndex(func) {
        if (!this.length) return;

        for (let i = 0; i < this.length; i++) {
            let exists = func(this.data[i]);
            if (exists) return i;
        }

        return -1;
    }

    indexOf(item) {
        if (!this.length) return;

        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                return i;
            }
        }

        return -1;
    }

    concat(arr) {
        let newArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            newArray.push(this.data[i]);
        }



    }
}

let names = new MyArray();
names.push('Alex');
names.push('Bron');
names.push('Cindy');
names.push('Dan');
// console.log(names.unshift('Hi'));
let test = names.findIndex((item) => {
    if (item.includes('A')) {
        return item;
    }
});
console.log(test);