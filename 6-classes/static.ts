// Static members are shared between all instances
class MyClass {
  static myStaticProperty = 42;
  static myStaticMethod() {
    return "Hello";
  }
}

// No need to create an instance to call static members
console.log(MyClass.myStaticProperty); // 42
console.log(MyClass.myStaticMethod()); // "Hello"


// Static members can have access modifiers.

class MyClass2 {
  private static myStaticProperty = 42;
  static myStaticMethod() {
    return MyClass.myStaticProperty;
  }
}

// console.log(MyClass2.myStaticProperty); // Error: Property 'myStaticProperty' is private and only accessible within class 'MyClass'.


// Unlike C#/Java, static classes aren't supported.
// Here are some alternatives:

// Unnecessary "static" class
class MyStaticClass {
  static doStuff() {}
}

// Prefer bare function
function doStuff() {}

// Or an object literal
const helper = {
  doStuff() {},
};


// Static blocks are useful for class-level initialization.

class StaticExample {
  // Unlike constructor, static block executes only once when the class is first loaded in the environment.
  static {
    console.log(`Running static block...`);
  }
}

const instance1 = new StaticExample();
const instance2 = new StaticExample();





// Exercise 1: Change the class below to use a static field `pi`
// and a static method `calculateArea` that accepts a radius.

class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number): number {
    return Circle.pi * radius * radius;
  }
}

console.log(Circle.calculateArea(5)); // Output: 78.5

// Exercise 2: Create a class `Counter` with a private static field `count`
// that tracks of the number of instances created.
// Include a `getCount` method that returns the current count.

class Counter {
  private static count = 0;

  constructor() {
    Counter.count++;
  }

  static getCount(): number {
    return Counter.count;
  }
}

// Answer:
const counter1 = new Counter();
const counter2 = new Counter();
console.log(Counter.getCount()); // Output: 2