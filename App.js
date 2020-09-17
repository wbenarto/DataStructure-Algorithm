class Heap {
    constructor() {
        this.heapElements = [];

    }

    insert(value) {
        this.heapElements.push(value);

        // compare new value to existing elements
        let currentElementIndex = this.heapElements.length -1;
        console.log(currentElementIndex)
        let parentElementIndex = Math.floor((currentElementIndex + 1)/2) -1;

        // check if need to switch parentElementIndex
        // max heap
        while(parentElementIndex >= 0 && this.heapElements[currentElementIndex] > this.heapElements[parentElementIndex]) {
            const parentElement =this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] = value;
            this.heapElements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex = Math.floor((currentElementIndex+1) / 2) - 1;
        }
    }
}

const heap = new Heap();

heap.insert(250);
heap.insert(197);

heap.insert(85);
// [250,85, 197]
heap.insert(101);
// [250, 85, 197, 101]
heap.insert(12);

// [250, 85, 197, 12, 101]
heap.insert(40);
// [250, 85, 197, 40, 101, 12]
heap.insert(15);
// [250, 85, 197, 12, 15, 40, 101]

console.log(heap);

// [250]
