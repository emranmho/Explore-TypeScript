// Private fields

// You can mark a class field as private to prevent it from being accessed from outside the class.

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice");
person.greet(); // Hello, my name is Alice

// This will fail:
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.

// This will also fail:
// person.name = "Bob"; // Error: Property 'name' is private and only accessible within class 'Person'.


// You can also mark a constructor parameter as private to automatically
// create a private field with the same name:

class Person2 {
  constructor(private name: string) {}

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person("Alice");
person2.greet(); // Hello, my name is Alice

// This will fail:
// console.log(person2.name); // Error: Property 'name' is private and only accessible within class 'Person'.

// Remember, TS doesn't exist at runtime, so private fields are enforced by the compiler, not by the runtime.
// If you compile example to JS and run it, you'll see that you can still access the private field.



// protected members are accessible within the class and its subclasses
class Chef {
  public cook() {
    console.log("Cooking " + this.getDish());
  }
  protected getDish() {
    return "pasta";
  }
}

class SpecialChef extends Chef {
  public prepareSpecialDish() {
    // OK to access protected member here
    console.log("Preparing special dish: " + this.getDish());
  }
}

const chef = new SpecialChef();
chef.cook(); // OK
// chef.getDish(); // Error: Property 'getDish' is protected and only accessible within class 'Chef' and its subclasses.



// Derived class may expose a subtype of the base class

class Base {
  protected a = 1;
  private x =1;
}

class Derived extends Base {
  a = 2; // No modifier, so public
//   x = 2;
}

const d = new Derived();
console.log(d.a); // OK


// Exercise: Understanding Private Fields in TypeScript Classes

// Question 1:
// Create a class named `Person` with a private field `name` of type string.
// Add a constructor that initializes the `name` field and a public method `getName` that returns the value of `name`.

// Answer:
class Person3 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

// Question 2:
// Create an instance of the `Person` class with the name "Alice".
// Try to access the `name` field directly from the instance and observe the TypeScript error.
// Use the `getName` method to get the name instead.

// Answer:
const person3 = new Person3("Alice");
// person.name; // Error: Property 'name' is private and only accessible within class 'Person'.
console.log(person3.getName()); // Output: Alice