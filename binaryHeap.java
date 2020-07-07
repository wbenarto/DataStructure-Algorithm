insert(1)
insert(13)
insert(4)
insert(0)
insert(10)


// we have to maintain the heap variant satisfied
// min or max
// if new heap added is going against invariant, will have to bubble up until you cant. 
// bubble up by switching to the parent node

// Removing elements from binary heaps ****

// poll is moving element at the root
// polling first by swiching last element to the root element
// then the top elements need to bubble down
// bubble down always to the lower value node between the two
// set bubble down to the left in case there's a tie, 
// do it until heap invariant satisfied

// remove(12)
// go thru the array until find 12
// mark the node and swap with the last node in tree
// remove the 12, check if there's invariant
// then move the replaced node bubble up until you get the invariant satisfied



poll()
remove(12)
remove(3)
poll()
remove(6)

import java.util.*;

class PQueue <T extends Comparable<T>> {
    // number currently in the heap
    private int heapsize = 0;

    // internal capacity
    private int heapCapacity = 0;

    // a dynamic list to track the elements inside heap  
    private List <T> heap = null;

    private Map <T, TreeSet<Integer> map = new HashMap<>();

    // construct a priority 
    public PQueue() {
        this(1);
    }

    // construct a priority queue with an initial capacity
    public PQueue(int sz) {
        heap = new ArrayList<>(sz);
    }

    public PQueue (T[] elems) {
        heapsize = heapCapacity = elems.length;
        heap = new ArrayList<T>( heapCapacity );

        for(int i = 0; i < heapSize; i++) {
            mapAdd(elems[i], i);
            heap.add(elems[i]);
        }

        for (int i = Math.max(0, (heapSize/2)-1); i>=0; i--)
            sink(i);
    }

    public Pqueue (Collection <T> elems) {
        this(elems.size());
        for( T elem : elems) add(elem);
    }

    // returns true/false depending on if PR is empty
    public boolean isEmpty() {
        return heapSize == 0;
    }

    public void clear() {
        for (int i=0; i < heapCapacity; i++)
            heap.set(i, null);
        heapSize = 0;
        map.clear();
    }

    public T peek() {
        if (isEmpty()) return null;
        return heap.get(0);
    }

    public T poll() {
        return removeAt(0);
    }

    

}