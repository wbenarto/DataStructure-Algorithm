class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    add(value) {
        if (this.value === null) {
            this.value = value;
            return;
        }
        

        // check if value is smaller or bigger
        if (this.value < value) {
            if (this.right) {
                this.right.add(value);
                return;
            }
            const newNode = new Node(value);
            newNode.parent = this;
            this.right = newNode;
            return;
        }

        if (this.value > value) {
            if(this.left) {
                this.left.add(value);
                return;
            }
            const newNode = new Node(value);
            newNode.parent = this;
            this.left = newNode;
            return;
        }
    }

    find (value) {
        if (this.value === value) {
            return this;
        }

        if (this.value < value && this.right) {
            return this.right.find(value);
        }

        if (this.value > value && this.left) {
            return this.left.find(value);
        }
    }

    remove(value) {
        const identifiedNode = this.find(value);
        if (!identifiedNode) {
            throw new Error('not here');
        }

        // leaf node remove 
        if (!identifiedNode.left && !identifiedNode.right) {
            const identifiedParent = identifiedNode.parent;
            identifiedParent.removeChild(identifiedNode);
        }

        // check if node has left or right or just 1 child
        if (identifiedNode.left && identifiedNode.right) {
            const nextBiggerNode = identifiedNode.right.findNext();
            if (nextBiggerNode.value !== identifiedNode.value){
                this.remove(nextBiggerNode.value);
                identifiedNode.value = nextBiggerNode.value;
                identifiedNode.left.parent = identifiedNode;
                identifiedNode.right.parent = identifiedNode;
            } else {
                identifiedNode.value = identifiedNode.right.value;
                identifiedNode.right = identifiedNode.right.right;

            }
        } else {
            const childNode = identifiedNode.left || identifiedNode.right;

            identifiedNode.left = childNode.left;
            identifiedNode.right = childNode.right;
            identifiedNode.value = childNode.value;
        }

        if (identifiedNode.left) {
            identifiedNode.left.parent = identifiedNode;
        }
        if (identifiedNode.right) {
            identifiedNode.right.parent = identifiedNode;
        }
        
      
    }

    removeChild(node) {
        if (this.left && this.left === node) {
            this.left = null;
            return;
        }
        if (this.right && this.right === node) {
            this.right = null;
            return;
        }
    }

    findNext() {
        if(!this.left) {
            return this;
        }

        return this.left.findNext();
    }
}

class Tree {
    constructor() {
        this.root = new Node(null);
    }

    add(value) {
        this.root.add(value);
    }

    remove(value) {
        this.root.remove(value);
    }

    find(value) {
        this.root.find(value)
    }
}

const newTree = new Tree();

newTree.add(5)
newTree.add(1)
newTree.add(7)
newTree.add(32)
newTree.add(77)
newTree.add(10)

newTree.find(5)
console.log(newTree)