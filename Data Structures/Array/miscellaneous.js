

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

    some(func) {
        if (!this.length) return;

        let all_follows = false;
        for (let i = 0; i < this.length; i++) {
            all_follows = func(this.data[i]);
            if (all_follows) return true;
        }

        return false;
    }

    every(func) {
        if (!this.length) return;

        let all_follows = true;
        for (let i = 0; i < this.length; i++) {
            all_follows = func(this.data[i]);
            if (!all_follows) return false;
        }

        return true;
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

    lastIndexOf(item) {
        if (!this.length) return;

        for (let j = this.length - 1; j >= 0; j--) {
            if (this.data[j] == item) {
                return j;
            }
        }

        return -1;
    }

    concat(arr) {
        let newArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            newArray.push(this.data[i]);
        }

        for (let i = 0; i < arr.length; i++) {
            newArray.push(arr.get(i));
        }

        return newArray;
    }

    includes(item) {
        if (!this.length) return false;

        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                return true;
            }
        }

        return false;
    }

    join(separator) {
        separator = separator ?? ',';

        let str = '';

        for (let i = 0; i < this.length; i++) {
            str += this.data[i];
            if (i < this.length - 1) {
                str += separator;
            }
        }

        return str;
    }

    fill(filler, startIndex = 0, count = this.length) {
        if (!this.length || startIndex > this.length) return this;

        for (let i = startIndex; i < startIndex + count; i++) {
            if (!this.data[i]) break;
            this.data[i] = filler;
        }

        return this;
    }

    /* Iterator Implementation - 1 */
    [Symbol.iterator]() {
        let index = 0;
        const self = this;
        return {
            next() {
                let value = self.get(index);
                if (value) {
                    index++;
                    return { value, done: false };
                }
                return { done: true };
            }
        }
    }

    /* Iterator Implementation - 2 */
    *[Symbol.iterator]() {
        for (let i = 0; i < this.length; i++) {
            yield this.data[i];
        }
    }

    /* Reverse Iterator */
    *reverseIterator() {
        for (let i = this.length - 1; i >= 0; i--) {
            yield this.data[i];
        }
    }
}

let names = new MyArray();
names.push('Alex', 'Bron', 'Cindy', 'Alex');
console.log(...names);
console.log(...names.reverseIterator());

