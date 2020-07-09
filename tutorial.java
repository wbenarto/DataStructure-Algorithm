// Object Oriented Programming
// Classes has special methods 

// Create new project, create package, create new class

package tutorial;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("hello world!");
		System.out.println("Hellow !");
		
		// primitive data type int, double, boolean, char = not changeable
		// create a variable with integer as data type
		int helloWorld = 5;
		
		// any number that has floating decimal point
		double num2 = 5.0;
		
		// true or false 
		boolean b = true;
		
		// any character. different than string. just one character
		char c = 't';
		
		// Not primitive data type
		// String can contain anything, have to use "". 
		String str = "tim";
		
		// assigning variable to another variable
		int tim = helloWorld;
		
		
		System.out.println(helloWorld*2/4+2);
	}

}


// Operations in Java
package tutorial;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// Operations in Java
		int x = 5;
		double y = 8;
		int z = 52;
		int sum = x + y + z;

        // if one of the variable is a double, the result has to be a double object also
		// to the power needs to use double
		double d = Math.pow(x, y);
		
        // converting the object type in line by adding (double)
        double u = x / (double)y;
		System.out.println(sum);
		
		System.out.println(d);
	}
}

// Scanner and input
package tutorial;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
        // System.in is the standard input system
        // using sc.next() will get the input and print it out in System
        Scanner sc = new Scanner(System.in);
        String scanned = sc.next();

        System.out.println();

        // input is expected to be an integer
        // will not show if different data type
        int scanned = sc.nextInt();

        boolean scanned = sc.nextBoolean();

        double scanned = sc.nextDouble();

        // proper way is to always make input in String and convert into something else
        String scanned = sc.next();
        int x = Integer.parseInt(scanned);
        // parsing string argument into an integer
	}
}

// Conditions and Boolean
package tutorial;
import java.util.Scanner;

public class Main (
    
    public static void main(String[] args) {
        int x = 6;
        int y = 7;
        int z = 10;

        // > < == >= <= !=
        // will return value of true or false
        boolean compare = x < y;

        // for string can only compare == or !=
        // && and ---- compare the conditions on left and right side are the same
        // || or operator -- if one of the condition is true, then it will return true
        // ! the not operator -- if the condition is not true, then we get true (opposite )
        boolean compare = x < y && y > z || z + 2 < 5 || x + 7 > y;

        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        if(s.equal("tim")) {
            System.out.println("You typed tim");
        }
    }
) 

// Nested Statements

// create an input in console
// grab the input and compare with conditions
// next an if statement inside of if statement
package tutorial;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.print("Input your age: ");
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int age = Integer.parseInt(s);

        if (age >= 13) {
            System.out.println("Input your favorite food: ");
            String food = sc.nextLine();

            if (food.equals("pizza")) {
                System.out.println("mine too")
            } else {
                System.out.println("not mine")
            }
        } else {
            System.out.println("you can't ride");
        }
    }
}


// Creating Arrays
package tutorial;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Declare array, array type, and array length
        // it's a set length, can't add pass that length
        int[] newArr = new Int[5];
        String[] newArr = new String[5]; 

        {"hello", "hi", "tim", "bill", "joe"}
        // last position of the arr is length -1
        
        // setting the values of all the elements in array
        newArr[0] = "hello";
        newArr[1] = "hello";
        newArr[2] = "hello";
        newArr[3] = "Joe";
        newArr[4] = "hello";

        int[] nums = {2,4,1,8,7};

        String x = newArr[0];

        System.out.println(x);
        // will print out Joe

        

    }
}

package tutorial;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        
        // create integer x valued 0
        int x = 0;

        int[] arr = {1,3,6,4,27,8}

        // creating for loop
        // 1st: declaring variables x 
        // 2nd: set condition
        // 3rd: set the iteration


        for (int i = 0; i<arr.length; i+=5 ) {
            System.out.println(i);

            if (arr[i] == 5) {
                System.out.println(arr[i]);
            }
        }

        // FOR EACH LOOP
        String[] names = new String[5];

        // Get input using scanner
        Scanner sc = new Scanner(System.in);
        int count = 0
        // declare new element integer in arr, using it as index
        // for each element in the array, do system.out 
        for (int element: arr) {
            System.out.println(element);
            count++;
        }


        for (int i=0; i<names.length; i++) {
            System.out.print("input: ");
            String input = sc.nextLine();
            names[i] = input;

            
        }

        for (String n:names) {
            System.out.println(n);

            if (n.equals("tim")) {
                // GET OUT OF THE LOOP
                break;
            }
        }

        // While loop 
        // if you don't know how many times you will go over
        // may change on user input

        Scanner sc = new Scanner(System.in);
        System.out.println("Type a number: ");
        // storing the int inside of x
        int x = sc.nextInt();

        while (x != 10) {
            System.out.println("Type 10..");

            // bring in the x 
            x = sc.nextInt();
        }

        // do while loop
        do {
            System.out.println("Type 10..");

            x = sc.nextInt();
        } while {

        }
    }
}


// **** SETS AND LIST ****
package tutorial;
import java.util.Scanner;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // Creating integer set, named t set equals to HashSet (standard implementation of set)
        // unordered list of elements, UNIQUE means no repeat elements
        Set<Integer> t = new HashSet<Integer>();
        t.add(5);
        t.add(7);
        t.add(5);
        t.add(9);
        t.remove(9);
        t.clear();
        t.isEmpty();
        t.size();

        // check if 5 is in the set
        // very quick to find element
        // arrays take longer than set
        boolean x = t.contains(5);

        System.out.println();

        // TreeSet unique elements, and it is ordered om a tree map
        // LinkedHashSet

        // ArrayList
        ArrayList<Integer> t = new ArrayList<Integer>();
        t.add(1);
        t.add(2);
        t.get(0);
        // change already established element in the index
        // t.set(index, what do you want to change it with)
        t.set(1,5);
        t.subList(1,3);

        System.out.println(t);
    }
}





// System.out.println(""); // to print in console 