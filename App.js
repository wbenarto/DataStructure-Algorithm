// Rebuild stack in linked list

import { linkedList } from './linkedList.js';

class Stack {
    constructor() {
        this.list = new linkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        return this.list.deleteHead();
    }

    isEmpty() {
        return !this.list.head;
    }

    toArray() {
        return this.list.toArray();
    }
 }

 const stack = new Stack();

 stack.push('Code');
 stack.push('Push Up');
 stack.push('Sit up');
 console.log(stack.toArray())
 console.log('linkedliststack fired')