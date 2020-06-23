// Recursion = a way of solving a problem by having a function call itself
// Factorials example
// given positive integer n

n! = n * (n - 1) * (n - 2 ) ... 3 * 2 * 1
4! = 4 * 3 * 2 * 1 = 24
2! = 2 * 1 = 2
1! = 1
0! = 1

fact(n)

n! = n * (n-1)! 
// n factorial = n times n minus 1 factorial
3! = 3 * (3 - 1)!
3! = 3 * (2)!

2! = 2 * (1)! = 2
1! = 1 * (0)! = 1

// recursive factorial 
3! = 3 * 2  * 1= 6

n! = {
    n*(n-1)! if n>= 1
    1 if n = 0
}

JAVA
int fact (int n) {
    if (n >= 1) {
        return n * fact(n-1);
    }
    else return 1;
}

f(0)

f(1)