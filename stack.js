
// Stack is created to reduce or limit functionality to avoid array being used incorrectly
// LIFO
// LAST IN FIRST OUT

class Stack {
    constructor() {
        this.items = [];
    }

    // add item in the end of array
    push(value) {
        this.items.push(value);
    }

    pop(value) {
        return this.items.pop(value);
    }

    // check if there's item in stack
    isEmpty() {
        return this.items.length === 0;
    }

    // return a copy of the original array
    toArray() {
        return this.items.slice();
    }
}

const stack = new Stack();

stack.push('Cook');
stack.push('Code');
stack.push('push up');
stack.push('sit up');
stack.push('shower');

console.log(stack.toArray());

stack.pop();

console.log(stack.toArray());