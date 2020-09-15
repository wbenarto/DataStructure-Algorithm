class Heap {
    constructor() {
        this.heapElements = [];
    }

    insert(value) {
        // O(1) push
        this.heapElements.push(value);

        // find parent
        let currentElementIndex = this.heapElements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1)/2) - 1;

        while(parentElementIndex >= 0 && this.heapElements[currentElementIndex] > this.heapElements[parentElementIndex]) {
            const parentElement = this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] = value;
            this.heapElements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex = Math.floor((currentElementIndex + 1)/2) - 1;
        }
    }
}

const heap = new Heap();

heap.insert(250);
heap.insert(197);
heap.insert(85);
heap.insert(101);
heap.insert(12);
heap.insert(40);
heap.insert(15);

console.log(heap)