// Abstract class has no implementation. Must be extended.
abstract class Animal {
  abstract makeSound(): void; // only allowed inside abstract classes
  abstract move(): void;
  run() {
    console.log("Running");
  }
}

// Can't instantiate.
// const cat: Animal = new Animal(); // Error: Cannot create an instance of an abstract class.

// Must extend
class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }

  move() {
    console.log("Running");
  }
}

const dog = new Dog();
dog.run();
dog.makeSound();




// Abstract constructor signature example
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return "world";
  }
}

// Specify that the constructor function must be a subclass of `Base`
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}

greet(Derived); // Hello, world
// greet(Base); // fails



// Exercise: Abstract Classes and Methods

// 1. Create an abstract class `Vehicle` with an abstract method `move`.
// 2. Create a subclass `Car` that extends `Vehicle` and implement the `move` method
// to log "The car is driving."

abstract class Vehicle {
  abstract move(): void;
}

class Car extends Vehicle {
  move(): void {
    console.log("The car is driving.");
  }
}

const car = new Car();
car.move(); // Output: The car is driving.