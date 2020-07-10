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

// *** HASH MAPS ***
package tutorial;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

// Map is key value pair, similar to list and array, able to index,
// indexing by keys. (ex: String, number, char, float, whatever)
// 
public class Main{
    public static void main() {
        Map m = new HashMap();

        // .put(key, value)
        m.put("tim",5);
        m.put(11, 999)

        // hash map does not sort the map
        // .get the value from key of "tim"
        System.out.println(m.get("tim"));


        // *** Tree Map ***
        // everything we keep will be sorted order
        Map m = new Treemap();
        m.put("tim", 5);
        m.put("joe", "x");
        m.put("a","b");

        // *** Linked Hash Map ***
        Map m = new LinkedHashMap();
        m.put("joe", "x");
        

        m.clear();
        m.get();
        m.containsValue("x"); // looks up for the key
        m.containsKey(5); // return true or false value. more useful
        m.values(); // prints out all the values in the map
        m.isEmpty();

        String str = "hello my name is tmie and i am cool";

        // using for loop
        for (char x:str.toCharArray()) {
            if (m.containsKey(x)){
                int old = (int) m.get(x);
                m.put(x, old+1);
            } else {
                m.put(x,1);
            }

            System.out.println(m);
        }

        m.remove(key);


        int[] x = {-99, 2, 1 ,5 ,6 ,2, 1, 4}

        Arrays.sort(x, 1, 7); // (which array, from which index, to which index not including)

        System.out.println(x);
    }
}


// *** OBJECT ***
package tutorial;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.next();
        int x = 5;
        x.next();
        String str = "hello"; // creating object String of value "hello"

        str.length();

        // the tim object methods are being called here
        tim("Tim!", 4);
    }

    // type in arg string and integer
    public static void tim(String str, int x) {
        for (int i; i<x; i++){
            System.out.println(str);
        }

        System.out.println(str);
    }

    // the int in this case specifying the method must return
    // an integer 
    public static int add2(int x) {
        return x + 2;
    }

    public static String str(String x) {
        return x + "!";
    }
}

// Creating Classes
// new - class - input name Dog
// every new class requires new file

// class is a data type, use information from classes to create an object

package tutorial;
import java.util.ArrayList;

// 
public class Dog {
   // have methods and attributes
   // 2 attributes in dog class : name and age
    
   private String name;
   private int age;
   
   // create constructor method
   public Dog(String name, int age) {
       this.name = name;
       this.age = age;
   }
    
    // void means it will not return anything
   public void speak() {
       System.out.println("I am " + this.name + " and I am " + this.age + " years old.")
   }

    // constructor to call private attributes from Dog class
    public int getAge() {
        return this.age;
    }

    // constructor to set age for new 
    public void setAge(int age) {
        this.age = age;
    }

    // private here means can only be use and see in the dog class
    private int add2() {
        return this.age + 2;
    }

}

// **** INHERITANCE **** 
package tutorial;


// Dog is super Class or parent class
// Cat is child class or sub class
// Copying all attributes from dog class 
// protected will grant access to child class within the package
public class Cat extends Dog {
	// only accessable from Cat class
	private int food; 
	
	public Cat(String name, int age, int food) {
		// call the constructor from super class(Dog)
		super(name, age);
		this.food = food;
	}
	
	public Cat(String name, int age) {
		super(name, age);
	}
	
	// if parameters is not required we can create other constructors
	public Cat(String name) {
		// if user only got name input, but no age
		// so age is being set to 0 default value
		super(name, 0);
	}
	// Changing the speak method from super
	public void speak() {
		System.out.println("Meow my name is " + this.name + " and I get fed " + this.food);
	}
}

// *** Checking equals *** 
package tutorial;

// interface, set of methods for class work
public class Student implements Comparable<Student>{
    private String name;

    public Student(String name) {
        this.name = name;
    }

    public boolean equals(Student other) {
        if (this.name == other.name) {
            return true;
        }
        else {
            return false;
        }
    }

    // comparing this name to the other name, comparing the first letter
    public int compareTo(Student other) {
        return this.name.compareTo(other.name);
    }

    public String toString() {
        return "Student(" + this.name + ")";
    }
}

// **** Inner Classes ****
package tutorial; 

public class OuterClass {

    public void inner() {
        class InnerClass{
            public void display() {
            System.out.println("This is an inner class");
        }
        }
        InnerClass in = new InnerClass();
        in.display()
    }
}

// *** Interfaces *** 
// somewhat close to classes, inheritance
// create new interface

package tutorial;

// to be inherited from Class 
public interface Vehicle {
    // we can only have public methods and we don't define any methods or attributes
    // define that this method exists
    
    // any attributes has to be final means it will be constant and can't be changed
    // use final to specify the attribute
    final int gears = 5;

    
    void speedUp(int a);
    void slowDown(int a);
    void changeGear(int a);

    default void out() {
        // we can use this on any classes that uses interface
        System.out.println("Default method");
    }

    // static method that we can just call statically
    static int math(int b) {
        return b + 9;
    }

}


// in Car file
package tutorial;

public class Car implements Vehicle{
    // need to implement all the abstract from interface
    private int gear = 1;
    private int speed = 0;

    public void changeGear(int gear) {
        this.gear = gear;
    }

    public speedUp(int change) {
        this.speed += change
    }

    public slowDown(int change) {
        this.speed -= change
    }

    public void display() {
        System.out.println("I am a car, going at " + this.speed + "km/h and I'm in gear" + this.gear);
        out();
    }
}

// in main file
package tutorial;

public class Main {
    public static void main (String[] args) {
      // creating a new car object called ford
      Car ford = new Car();
      ford.speedUp(20);
      ford.changeGear(2);
      ford.display();  
      
    }
}

// *** Static ***
// static variables will allows us to change 
// static methods will allows to call using the constructor instead of this keyword
// using this when you don't care about the instances

// *** Void ***
// we manipulate array, or anything else, but not returning values to call statement

// System.out.println(""); // to print in console 