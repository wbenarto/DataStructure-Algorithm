// class linkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     append(value) {
//         let newNode = {value : value, next : null};

//         // if there is a node in this.tail, set the next value of tail to new Node
//         if (this.tail) {
//             this.tail.next = newNode;
//         }
//         // if tail is empty, set the newNode as the tail
//         this.tail = newNode;

//         // if head is empty, set newNode as the head also
//         if (!this.head) {
//             this.head = newNode;
//         }
//     }

//     // adding element in the beginning 
//     prepend(value) {
//         let newNode = {value: value, next: this.head};

//         this.head = newNode;

//         if (!this.tail) {
//             this.tail = newNode;
//         }

//     }

//     delete(value) {
//         if (!this.head) {
//             return;
//         }

//         while (this.head && this.head.value === value) {
//             this.head = this.head.next;
//         }

//         let curNode = this.head;

//         while (curNode.next) {
//             if (curNode.next.value === value) {
//                 curNode.next = curNode.next.next;
//             } else {
//                 curNode = curNode.next;
//             }

//         }
//     }

//     toArray() {
//         let elements = [];

//         let curNode = this.head;

//         while (curNode) {
//             elements.push(curNode);
//             curNode = curNode.next;
//         }

//         return elements;
//     }
// }

// const linkedList1 = new linkedList();

// linkedList1.append(1);
// linkedList1.append("Bye");
// linkedList1.append(23);
// linkedList1.append(12)
// linkedList1.append(1);

// linkedList1.prepend("new first");

// linkedList1.delete(1);

// console.log(linkedList1.toArray());

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = {value, next: null}

        if(this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {value, next: this.head}
        
        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if(existingNode) {
            const newNode = {value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    find(value) {
        if(!this.head) {
            return null;
        }
        
        let curNode = this.head;

        while (curNode) {
            // finding first occurance
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }
    
    delete(value) {
        if (!this.head) {
            return null;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }

        let curNode = this.head;

        while (curNode.next) {
            if(curNode.next.value === value) {
                curNode.next = curNode.next.next
            } else {
                curNode = curNode.next
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }

    toArray() {
        let elements = [];

        let curNode = this.head;

        while(curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }
}

const test1 = new linkedList();

test1.append(1);
test1.append(3);
test1.append(4);

test1.prepend('start');
test1.append('end');
test1.delete('end');

test1.insertAfter('second', 'start')

let print = test1.toArray();

console.log(print);
console.log(test1.find(3));