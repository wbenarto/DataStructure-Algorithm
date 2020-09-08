class Node {
    constructor(value, parentNode = null) {
        this.parent = null;
        this.right = null;
        this.left = null;
        this.value = value;
    }

    add (value) {
        if (this.value === null) {
            this.value = value;
            return;
        }

        // value to be added larger than this.value, so put it on the right 
        if (this.value < value) {
            if (this.right) {
                this.right.add(value);
                return;
            }

            const newNode = new Node(value);
            this.right = newNode;
            return;
        }

        // value to be added smaller than this.value, put it on the left
        if (this.value > value) {
            if (this.left) {
                this.left.add(value);
                return;
            }
            const newNode = new Node(value);
            this.left = newNode;
            return;
        }
    }

    find (value) {
        if (this.value === value ) {
            return this;
        }

        // check if bigger or smaller, if smaller look left, if bigger look right
        if (this.value < value && this.right) {
          return  this.right.find(value);
        }

        if (this.value > value ** this.left) {
            return this.left.find(value);
        }
    }
}

class Tree {
    constructor () {
        this.root = null;
    }

    add (value) {
        this.root.add(value);
    }

    remove (value) {
        this.root.remove(value);
    }

    find (value) {
        this.root.find(value)
    }
}