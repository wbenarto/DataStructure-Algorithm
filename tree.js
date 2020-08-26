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
    constructor(value, parentNode = null) {
        this.parent = parentNode;
        this.value = value;
        this.children = []
    }

    addNode(value) {
        const node = new Node(value, this)
        this.children.push(value);
        return {node: node,index: this.children.length -1}
    }

    remove(index) {
        return this.children.splice(index, 1)
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }
}
const fileSystem = new Tree('/');
const gamesNode = fileSystem.root.addNode('/games');
const documentsNode = fileSystem.root.addNode('/documents')

gamesNode.node.addNode('cod.exe');
documentsNode.node.addNode('results.txt');

console.log(fileSystem)
