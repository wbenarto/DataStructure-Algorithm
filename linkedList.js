// class linkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     append(value) {
//         const newNode = {value, next: null}

//         if(this.tail) {
//             this.tail.next = newNode;
//         }

//         this.tail = newNode;

//         if (!this.head) {
//             this.head = newNode;
//         }
//     }

//     prepend(value) {
//         const newNode = {value, next: this.head}
        
//         this.head = newNode;

//         if(!this.tail) {
//             this.tail = newNode;
//         }
//     }

//     insertAfter(value, afterValue) {
//         const existingNode = this.find(afterValue);

//         if(existingNode) {
//             const newNode = {value, next: existingNode.next};
//             existingNode.next = newNode;
//         }
//     }

//     find(value) {
//         if(!this.head) {
//             return null;
//         }
        
//         let curNode = this.head;

//         while (curNode) {
//             // finding first occurance
//             if (curNode.value === value) {
//                 return curNode;
//             }
//             curNode = curNode.next;
//         }

//         return null;
//     }
    
//     delete(value) {
//         if (!this.head) {
//             return null;
//         }

//         while (this.head && this.head.value === value) {
//             this.head = this.head.next
//         }

//         let curNode = this.head;

//         while (curNode.next) {
//             if(curNode.next.value === value) {
//                 curNode.next = curNode.next.next
//             } else {
//                 curNode = curNode.next
//             }
//         }

//         if (this.tail.value === value) {
//             this.tail = curNode;
//         }
//     }

//     toArray() {
//         let elements = [];

//         let curNode = this.head;

//         while(curNode) {
//             elements.push(curNode);
//             curNode = curNode.next;
//         }

//         return elements;
//     }
// }

// const test1 = new linkedList();

// test1.append(1);
// test1.append(3);
// test1.append(4);

// test1.prepend('start');
// test1.append('end');
// test1.delete('end');

// test1.insertAfter('second', 'start')

// let print = test1.toArray();

// console.log(print);
// console.log(test1.find(3));


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // add elements in the end / tail of list
    append(value) {
        const newNode = {value, next: null};

        if(this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    
    }


    // adding element in the beginning / head
    prepend(value) {
        const newNode = {value, next: this.head}

    
        this.head = newNode;
        

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        let existingNode = this.find(afterValue);

        if(existingNode) {
           let newNode = {value, next: existingNode.next}
           existingNode.next = newNode;
        }

    }

    find(value) {
        if(!this.head) {
            return null;
        }

        let curNode = this.head;

        while(curNode) {
            if(curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next
        }

        return null;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        while(curNode.next) {
            if(curNode.next.value === value) {
                curNode.next = curNode.next.next
            } else {
                curNode = curNode.next
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode
        }

        return null;
    }
    
    // delete first item
    deleteHead() {
        if (!this.head) {
            return null;
        }
        const deletedItem = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedItem;
    }

    toArray() {
        let elements = [];

        let curNode = this.head;

        while(curNode){
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }
}

const test = new LinkedList()



test.append(1);
test.append('2');
test.append(3);
test.append('4');
test.append('five');

test.prepend('first');

test.delete('five');

test.insertAfter(6, '4')

test.find(0)
let print = test.toArray()
console.log(print)

console.log(test.find(1))
console.log('linkedlist fired')

