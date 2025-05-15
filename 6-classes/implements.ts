//  `implements` keyword to declares that a class satisfies a given interface.
interface Animal {
  name: string;
  speak(message: string): void;
}

class Dog implements Animal {
  // This is necessary - it's not applied by `implements` since implements only checks for compatibility
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // The is necessary - it's not applied by `implements` since implements only checks for compatibility
  speak(message: string) {
    console.log(message);
  }
}


// Exercise: Understanding `implements` with Classes

// Question 1:
// Given the interface `Logger` below, create a class `ConsoleLogger`
// that implements the `Logger` interface and logs the message to the console.

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger{
    log(message: string): void{
        console.log(message);
    }
}