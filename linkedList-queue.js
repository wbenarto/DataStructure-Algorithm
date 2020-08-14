import { LinkedList } from './linkedList.js';

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    // add item in the end
    enququq(value) {
        this.list.append(value);
    }

    // removing head
    dequeue() {
        return this.list.deleteHead();
    }

    toArray() {
        return this.list.slice();    }

        
}

const test = new Queue();

test.enqueue("Jonas")
test.enqueue("2nd")

console.log(test.toArray())

test.dequeue();

console.log(test.toArray());