
/** Queue
 * A "queue" is a linear data structure that follows the "First In, First Out" (FIFO) principle.
 * You enqueue (add) elements at the rear or end (constant time).
 * You dequeue (remove) elements from the front or head (constant time).
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyQueue {
    constructor(data) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        if (data) {
            let newNode = new Node(data);
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    /* Time: O(1) */
    enqueue(data) {
        let newNode = new Node(data);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    /* Time: O(1) */
    dequeue() {
        if (!this.length) return;

        let out_element = this.head;
        let temporary_node = this.head.next;
        this.head = temporary_node;
        this.length--;
        return out_element.data;
    }

    /* Time: O(1) */
    peek() {
        if (!this.length) return;

        return this.head.data;
    }

    /* Time: O(1) */
    isEmpty() {
        return this.length ? false : true;
    }

    /* Queue Iterable - 1 */
    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    const value = current.data;
                    current = current.next;
                    return { value, done: false };
                }
                return { done: true };
            },
            return() {
                current = null;
                return { done: true };
            }
        };
    }

    /* Queue Iterable - 2 */
    *[Symbol.iterator]() {
        let current_node = this.head;

        while (current_node) {
            let data = current_node.data;
            current_node = current_node.next;
            yield data;
        }
    }

    /* Reverse Iterator */
    *reverseIterator() {
        let values = [];

        let current_node = this.head;
        while (current_node) {
            values.push(current_node.data);
            current_node = current_node.next;
        }

        for (let i = values.length - 1; i >= 0; i--) {
            yield values[i];
        }
    }
}

/*****************************************************************************************************************************/

class MyArrayQueue {
    constructor(data) {
        this.members = [];

        if (data) {
            this.members.push(data);
        }
    }

    /* Time: O(1) */
    enqueue(...arg) {
        if (!arg.length) return;

        for (let i = 0; i < arg.length; i++) {
            this.members.push(arg[i]);
        }
    }

    /* Time: O(n) */
    dequeue() {
        if (!this.members.length) return;

        return this.members.shift();
    }

    /* Time: O(1) */
    peek() {
        if (!this.members.length) return;

        return this.members[0];
    }

    /* Time: O(1) */
    length() {
        return this.members.length;
    }

    /* Time: O(1) */
    isEmpty() {
        return this.members.length ? false : true;
    }
}
