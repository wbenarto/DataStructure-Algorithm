public class Queue <T> implements Iterable <T> {

    // Java implementation of doubly linked list
    private java.util.LinkedList <T> list = new java.util.LinkedList <T> ();

    // constructor to create empty queue
    public Queue() { }
    // constructor optional empty queue with first elem
    public Queue(T firstElem) { 
        offer(firstElem);
    }

    // Return the size of the queue
    public int size() {
        return list.size();
    }

    public boolean isEmpty() {
        return size() == 0
    }

    public T peek() {

        // throw an error if list is empty, if not see if list got first elem
        if (isEmpty()) 
            throw new RuntimeException('Queue Empty');
        return list.peekFirst()
    }

    // removes a node with the highest priority
    public T poll() {
        if(isEmpty())
            throw new RuntimeException("Queue Empty");
        return list.removeFirst();
    }

    public void offer(T elem) {
        list.addLast(elem);
    }

    @Override public java.util.Iterator <T> iterator () {
        return list.iterator();
    }
}