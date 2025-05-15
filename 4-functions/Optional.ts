function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Usage examples
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Good morning")); // Output: Good morning, Bob!


// Alternatively, you can require explicitly passing undefined for a given optional parameter:
function greet2(name: string, greeting: string | undefined): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Now this fails:
console.log(greet2("Alice", undefined)); // Error: Expected 2 arguments, but got 1


// Alternatively, you even specify a default but this is just a more verbose way of
// specifying an optional parameter:
function greet3(name: string, greeting: string | undefined = undefined): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

greet3("Alice"); // Output: Hello, Alice!




// 1. Make the second parameter optional.
function concatStrings(str1: string, str2?: string): string {
  return str1 + str2;
}

// 2. Specify an empty string as the default value for the second parameter.
function concatStrings2(str1: string, str2: string = ""): string {
  return str1 + str2;
}