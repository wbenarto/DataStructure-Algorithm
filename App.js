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
    constructor(value, parentNode=null) {
        this.parent = parentNode;
        this.children = [];
        this.value = value;
    }

    addNode(value) {
        // path /documents/pictures/webe.jpg
        // documents pictures webe.jpg
        const segments = value.split('/');

        if (segments.length === 0) {
            return;
        }
        if (segments.length === 1) {
            return this.children.push(segments[0], this)
        }

        const existingChildNode = this.children.find(child=>this.value === child)

        if (existingChildNode) {
            const node = new Node(segments[0], this)
            
        }

    }

    removeNode() {

    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }

    add(path) {
        this.root.addNode(path)
    }
}

const filesystem = new Tree('/');

filesystem.add('/documents/picture/webe.jpg')
filesystem.add('/nba/lakers')
console.log(filesystem)
// class Node {
//     constructor(value, parentNode=null) {
//         this.parent = parentNode;
//         this.value = value;
//         this.children = [];
//     }

//     addNode(value) {

//         // existing = documents
//         // val = /documents/pictures/homeschool
//         // documents pictures homeschool
//         const segment = value.split('/');

//         if(segment.length === 0) {
//             return;
//         }



//         if(segment.length === 1) {
//             const node = new Node(segment[0], this);
//             this.children.push(node);
//             return {node: node, index: this.children.length - 1 }
//         }

//         const existingChildNode = this.children.find(child=> child.value === segment[0])

//         if(existingChildNode) {
//             // if first parent exists, add to that node, slice from index 1 and join by /
//             existingChildNode.addNode(segment.slice(1).join("/"))
//         } else {
//             const node = new Node(segment[0], this)
//             node.addNode(segment.slice(1).join('/'));
//             this.children.push(node);
//             return {node: node, index: this.children.length - 1}
//         }
//     }

//     deleteNode(index) {
//         return this.children.splice(index, 1)
//     }
// }

// class Tree {
//     constructor(rootValue) {
//         this.root = new Node(rootValue)
//     }

//     add(path) {
//         this.root.addNode(path)
//     }

//     remove(path) {

//     }
// }