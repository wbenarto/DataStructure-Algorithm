class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    add(value) {
        if (this.value === null) {
            this.value = value;
        }
        return;

        // check if value is smaller or bigger
        if (this.value < value) {
            const newNode = new Node(value);
            this.right = newNode;
            return;
        }

        if (this.value > value) {
            const newNode = new Node(value);
            this.left = newNode;
            return;
        }


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