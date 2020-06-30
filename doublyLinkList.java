public class DoublyLinkedList <T> implements Iterable <T> {

    private int size = 0;
    private Node <T> head = null;
    private Node <T> tail = null;

    private class Node <T> {
        T data;
        Node <T> prev, next;
        public Node(T data, Node <T> prev, Node <T> next) {
            this.data = data;
            this.prev = prev;
            this.next = next; 
        }
        @Override public String toString() {
            return data.toString();
        }
    }

    public void clear() {
        Node <T> trav = head;
        while (trav != null) {
            Node <T> next = trav.next;
            trav.prev = trav.next = null;
            trav.data = null;
            trav = next;
        }
        head = tail = trav = null;
        size = 0;
    }

    public int size() {
        return size;
    }

    public void add(T elem) {
        addLast(elem);
    }

    public void addFirst(T elem) {
        if (isEmpty()) {
            head = tail = new Node <T> (elem, null, null);
        } else {
            head.prev= new Node <T> (elem, null, head);
            head = head.prev;
        }
        size++;
    }

    public void addLast(T elem) {
        if (isEmpty()) {
            head = tail = new Node <T> (elem, null, null);
        } else {
            tail.next = new Node <T> ( elem, tail, null);
            tail = tail.next;
        }
        size++
    }

    public T peekFirst() {
        if (isEmpty()) throw new RuntimeException('Empty List');
        return head.data;
    }

    public T peekLast() {
        if(isEmpty()) throw new RuntimeException("Empty List");
        return tail.data;
    }

    public T removeFirst() {
        if (isEmpty()) throw new RuntimeException("Empty List");
        T data = head.data;
        head = head.next;
        --size;

        if (isEmpty()) tail = null;

        // deleting pointers in memory
        else head.prev = null;
        
        return data;
    }

    // remove an arbitrary node 
    private T remove(Node <T> node) {
        if(node.prev == null) return removeFirst();
        if(node.next == null) return removeLast();

        node.prev.prev = node.prev;
        node.prev.next = node.next;

        T data = node.data;

        node.data = null;
        node = node.prev = node.next = null;

        --size;

        return data;
    }

    // remove a node at a particular index
    public T removeAt(int index) {
        if (index < 0 || index >= size) throw new IllegalArgumentException();

        int i;
        Node <T> trav;

        if (index < size/2) {
            for (i=0, trav = head, i != index; i++) 
            trav = trav.next;
        } else 
        for ( i = size-1, trav = tail; i != index; i--) 
        trav = trav.prev;

        return remove(trav);
    }
}