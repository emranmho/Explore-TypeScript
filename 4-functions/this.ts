const person = {
  name: "Alice",
  sayHello() {
    console.log(`Hello, ${this.name}!`); // type safe, and autocomplete works.
  },
};


// Can declare this on bare functions as well
const person2 = { name: "Alice" };

function sayHello(this: { name: string }) {
  console.log(`Hello, ${this.name}!`);
}

sayHello.call(person2); // Hello, Alice!


// Exercise: Understanding `this` in TypeScript Functions

// Question 1:
// Create an object literal called `user` with a property `username` and a method `introduce`.
// The `introduce` method should return an introduction message that includes the
// `username` property using `this`.


const user = {
    usename: "alice",
    introduce(){
        return `hello ${this.usename}`;
    },
}

console.log(user.introduce())


// Question 2:
// Create a class `Counter` with a property `count` initialized to 0 and a method `increment`.
// The `increment` method should increase the `count` property by 1 using `this`.

class Counter {
    count: number =0;
    increment(){
        this.count++;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.count)


// Question 3:
// Create a function `sayHello` that logs a greeting message for the person object below using `this`.
// Use the `call` method to invoke the `sayHello` function with the `person` object.

const person3 = { username: "Alice" };

function sayHello2(this: {username: string}){
    console.log(`Hello ${this.username}`)
}

sayHello2.call(person3) 