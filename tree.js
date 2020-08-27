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
        const segments = value.split('/');

        // check if segments is empty, return nothing
        if(segments.length === 0) {
            return;
        }
        //
        if(segments.length === 1) {
            const node = new Node(segments[0], this)
            this.children.push(node);
            return {node: node,index: this.children.length -1}
        }
        // check if childen value equals to first element in segments
        const existingChildNode= this.children.find(child=>child.value === segments[0])

        // if existingNode is true, call that node and pass in the remaining segments
        if(existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join("/"))
        } else {
            const node = new Node(segments[0], this) ;
            node.addNode(segments.slice(1).join('/'));
            this.children.push(node);
            return {node: node, index: this.children.length-1};
        }
        
       
    }

    removeNode(index) {
        return this.children.splice(index, 1)
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }

    add(path) {
        this.root.addNode(path)
    }

    remove(path) {

    }
}
const filesystem = new Tree('/');

// ------ using addNodes to create contents ----------
// const gamesNode = fileSystem.root.addNode('/games');
// const documentsNode = fileSystem.root.addNode('/documents')

// gamesNode.node.addNode('cod.exe');
// documentsNode.node.addNode('results.txt');

filesystem.add('/documents/personal/tax.docx');
filesystem.add('/games/cod.exe');


console.log(filesystem)
