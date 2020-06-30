// river is 11 feet
// frog can step 1 feet or both feet a time
// each step has stone to step on
// how many ways/possible scenario



frog 1 1 1 1 1 1 1 1 1 1 1

// 2 feet is quicker we call is 2
// single feet is 1

// 5 both feet, 1 single
// 2 2 2 2 2 1
// 11 single feet
// 1 1 1 1 1 1 1 1 1 1 1
// hop
// 1 2 1 2 1 2 1 1
// 2 1 2 1 2 1 2


Big O Notation & Time complexity

time complexity: 
linear time
constant time
quadratic time

Big O notation
linear time O(n)
constant time O(1)
quadratic time O(n^2)

T is time needed to perform function
T = an + b = O(n)

1. find the fastest growing term
2. take out the coefficient

T = cn^2 + dn + e = O(n^2)
c, d, e is constant
n^2 is the fastest growing terms 
so take out c and leave n^2

it compares quickly multiple functions in terms of their performance

given_array = [1, 4 ,2 ,3 ,7, 10, ..., 20]

// define function
def stupid_function(given_array){
    int total = 0 //O(1) because a constant
    return total //O(1) same. 
}

T = O(1) + O(1) = c1 + c2 = c3
=O(1)

// another function with loop
def find_sum(given_array) {
    total = 0 // O(1) constant  
    // for loop the array and add to total
    total += i // O(1) * n for how many times it has to loop
    return total // O(1) constant
}

T2 = O(1) + n*O(1) + O(1)
    = c4 + n*c5 = O(n)
// find the fastest growing term
// take out the coefficient

array_2d = [[1,2,3],[4,2,7],[2,3,3]]
// 2 dimensional array

T3 = O(1) + n^2*O(1) + O(1)
T3 = O(n^2)
quadratic time complexity



i := 0
while i < n 
    j = 0
    while j < 3*n 
        j = j + 1
    j = 0
    while j < 2*n 
        j = j + 1
    i = i + 1

// starting from zero, loop until n excluding
// inside loop, 3*n increment j
// another inside loop, 2*n  increment j

bigO 
f(n) = n * (3n + 2n) = 5n^^2
O(n^^2)



i:= 0
while i < 3*n
    j:= 10
    while j <= 50 
        j = j + 1
    j = 0
    while j< n*n*n
        j = j + 2
    i=i+1

// outside loop, starting zero to 3*n
// inside loop, starting from 10 to 50, increment j by 1
// another inside loop, from 0 to cubic n, increment j by 2

f(n)= 3n *(40 + N^^3/2)
O(n) = 120n + 9n^^4/2
O(n) = n^^4

The most dominant term in f(n)
and get rid of the coefficient



// Example Code
@SuppressWarnings("unchecked")
// array class generic of type 
public class Array <T> implements Iterable <T> {

    private T [] arr;
    private int len = 0;
    private int capacity = 0;

    // constructor
    public Array() {this(16);}

    public Array(int capacity) {
        if(capacity<0) throw new IllegalArgumentException("Illegal Capacity: " + capacity);
        this.capacity = capacity;
        arr = (T[]) new Object[capacity];

        public int size() { return len; }
        public boolean isEmpty() { return size() === 0; }

        public T get(int index) { return arr[index]; }
        public void set(int index, T elem) {
            arr[index] = elem;
        }

        public void clear() {
            for (int i=0; i<capacity; i++)
                arr[i] = null;
            len = 0;
         }
        
        // add method
        public void add(T elem) {

            if (len+1 >= capacity) {
                if(capacity == 0) capacity = 1;
                else capacity *= 2;
                T[] new_arr = (T[]) new Object[capacity];
                for(int i=0; i< len; i++)
                    new_arr[i] = arr[i];
            }  
            arr[len++] = elem;
        }

        public boolean remove(Object obj) {
            for (int i = 0; i < len; i++) {
                if (arr[i].equals(obj)){
                    removeAt(i); return true; 
                }
            }
            return false
        }
    }
}