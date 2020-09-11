class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }   

    get leftDepth() {
        // if no left child
        if(!this.left) {
            return 0;
        }

        return this.left.depth+1

    }

    get rightDepth() {
        if (!this.right) {
            return 0;
        }
        return this.right.depth+1
    }

    // Getter dynamic calculated property
    get depth() {
        return Math.max(this.leftDepth, this.rightDepth);
    }

    get balanceFactor() {
        return this.leftDepth - this.rightDepth;
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

class AVLTree extends Tree {
    add(value) {
        super.add(value);

        let curNode = this.root.find(value);

        this.balance(curNode);
    }

    remove(value) {
        super.remove(value);

        this.balance(this.root);
    }

    balance(node) {
        if (node.balanceFactor < -1) {
            if (node.right.balanceFactor < 0) {
                this.rotateLeft();
            } else if (node.right.balanceFactor > 0) {
                this.rotateRightLeft(node);
            }
        } else if (node.balanceFactor > 1) {
            if (node.left.balanceFactor < 0) {
                this.rotateLeftRight(node);
            } else if (node.left.balanceFactor > 0) {
                this.rotateRight(node);
            }
        }
    }
}

const newTree = new Tree();

newTree.add(1)
newTree.add(2)
newTree.add(3)
// newTree.add(32)
// newTree.add(77)
// newTree.add(10)

// newTree.find(5)
console.log(newTree)