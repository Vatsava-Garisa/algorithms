
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyStack {

    constructor(data) {
        this.head = null;
        this.length = 0;
        if (data) {
            let newNode = new Node(data);
            this.head = newNode;
            this.length++;
        }
    }

    /* Time: O(1) */
    push(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            this.length++;
            return;
        }

        let temporary_node = this.head;
        newNode.next = temporary_node;
        this.head = newNode;

        this.length++;
    }

    /* Time: O(k) */
    push_multiple(...arg) {
        if (!arg.length) {
            return;
        }

        for (let i = 0; i < arg.length; i++) {
            this.push(arg[i])
        }
    }

    /* Time: O(k) */
    push_multiple_preserve_order(...arg) {
        if (!arg.length) {
            return;
        }

        for (let i = arg.length - 1; i >= 0; i--) {
            this.push(arg[i]);
        }
    }

    /* Time: O(1) */
    pop() {
        if (this.head == null) {
            return;
        }

        this.head = this.head.next;

        this.length--;
    }

    /* Time: O(1) */
    peek() {
        return this.head ? this.head.data : undefined
    }

    /* Time: O(1) */
    size() {
        return this.length;
    }

    /* Time: O(1) */
    isEmpty() {
        return this.length ? false : true;
    }
}
/*****************************************************************************************************************************/

class MyArrayStack {

    constructor(data) {
        this.members = [];

        if (data) {
            this.members.push(data);
        }
    }

    /* Time: O(1) */
    push(...arg) {
        if (!arg.length) {
            return;
        }
        for (let i = 0; i < arg.length; i++) {
            this.members.push(arg[i]);
        }
    }

    /* Time: O(1) */
    pop() {
        this.members.pop();
    }

    /* Time: O(1) */
    peek() {
        return this.members[this.members.length - 1];
    }

    /* Time: O(1) */
    size() {
        return this.members.length;
    }

    /* Time: O(1) */
    isEmpty() {
        return this.members.length ? false : true;
    }

}
