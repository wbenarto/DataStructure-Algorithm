class Queue {
    constructor() {
        this.items = [];
    }

    // Adding in the beginning of array
    enqueue(value) {
        this.items.unshift(value);
    }

    // delete at the end of array
    dequeue() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    // returning a copy of the array
    toArray() {
        return this.items.slice();
    }
}

const test = new Queue();

test.enqueue("Jonas")
test.enqueue("2nd")

console.log(test.toArray())

test.dequeue();

console.log(test.toArray());