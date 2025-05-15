// Function overload signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Function implementation
function add(a: any, b: any): any {
  return a + b;
}

// Usage examples
const sum = add(10, 20); // 30
const concatenatedString = add("Hello, ", "world!"); // "Hello, world!"

console.log(sum);
console.log(concatenatedString);


// Exercise 1: Create function overloads for a function named `getLength`
// that can take either a string or an array and return their length.

function getLength(s: string): number;
function getLength(arr: any[]): number;

function getLength(arr: any): number{
    if(typeof arr == "string" || Array.isArray(arr)){
        return arr.length;
    }
    throw new Error("Invalid")
}
// Test your implementation:
getLength("TypeScript"); // 10
getLength([1, 2, 3, 4, 5]); // 5