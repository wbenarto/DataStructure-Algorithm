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




// System.out.println(""); // to print in console 