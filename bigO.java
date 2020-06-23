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