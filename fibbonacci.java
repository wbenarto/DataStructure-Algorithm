//Fibonnacci sequence

1 , 1 , 2 , 3 , 5 , 8

//fib(n) turns into sequence
//fib(2) = 1
//fib(3) = 2
//fib(4) = 3


int fib(int n) {
    if (n >= 3) {return fib(n-1) + fib(n-2);}
    // recursive case
    else {return 1;}
    // base case

}