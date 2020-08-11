const { link } = require("fs");

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = {value : value, next : null};

        // if there is a node in this.tail, set the next value of tail to new Node
        if (this.tail) {
            this.tail.next = newNode;
        }
        // if tail is empty, set the newNode as the tail
        this.tail = newNode;

        // if head is empty, set newNode as the head also
        if (!this.head) {
            this.head = newNode;
        }
    }

    // adding element in the beginning 
    prepend(value) {
        let newNode = {value: value, next: this.head};

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

    }

    delete(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }

        }
    }

    toArray() {
        let elements = [];

        let curNode = this.head;

        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }
}

const linkedList1 = new linkedList();

linkedList1.append(1);
linkedList1.append("Bye");
linkedList1.append(23);
linkedList1.append(12)
linkedList1.append(1);

linkedList1.prepend("new first");

linkedList1.delete(1);

console.log(linkedList1.toArray());
