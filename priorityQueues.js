class Node {
    constructor(value, priority) {
        this.value = value;
        this.next = null;
        this.priority = priority;
    }


}

class PriorityQueue {
    constructor() {
        this.first = null;
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        if(!this.first || priority > this.first.priority) {
            // saving the next node in the first
            newNode.next = this.first;

            this.first = newNode;
        } else {
            let currentNode = this.first;

            while (currentNode.next && priority < currentNode.next.priority) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;

            currentNode.next = newNode;
        }

        
    }
    process() {
        const first = this.first;
        this.first = this.first.next;
        return first;
    }
}

const queue = new PriorityQueue();

queue.insert('Clean Up', 2);
queue.insert('taxes', 90);
queue.insert('code', -4);

console.log(queue)



console.log(queue.process());
console.log(queue.process());
console.log(queue.process());