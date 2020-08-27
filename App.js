// // Rebuild stack in linked list

// import { linkedList } from './linkedList.js';

// class Stack {
//     constructor() {
//         this.list = new linkedList();
//     }

//     push(value) {
//         this.list.prepend(value);
//     }

//     pop() {
//         return this.list.deleteHead();
//     }

//     isEmpty() {
//         return !this.list.head;
//     }

//     toArray() {
//         return this.list.toArray();
//     }
//  }

//  const stack = new Stack();

//  stack.push('Code');
//  stack.push('Push Up');
//  stack.push('Sit up');
//  console.log(stack.toArray())
//  console.log('linkedliststack fired')

// class Node {
//     constructor(value, parentNode = null) {
//         this.children = [];
//         this.parent = parentNode;
//         this.value = value;
//     }

//     addNode(value) {
//         const node = new Node(value, this)
//         // creating new node then pushed to children array
//         this.children.push(node);
//         return {node: node, index: this.children.length-1}
//     }
//     //removing one node
//     remove(index) {
//         this.children.splice(index,1)
//     }
// }

// class Tree {
//     constructor(rootValue) {
//         this.root = new Node(rootValue);
//     }
// }


class Node {
    constructor(val, parentNode=null) {
        this.children = [];
        this.parent = parentNode;
        this.val = val
    }

    addNode(value) {
        const segment = value.split('/');
        const existingChildNode = this.children.find(child=>{

        })
        if (segments === 0) {
            return;
        }

        if (segments === 1) {}

        this.children.push(segment)
        console.log(this.children)
    }

    removeNode() {

    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }
}

const newTree = new Tree();
newTree.root.addNode('1')