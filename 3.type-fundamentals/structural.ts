 // TypeScript types are structural, not nominal.
interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
}

const product: Product = { id: 1, name: "Cory" };

// Allowed because the two interfaces have a compatible structure
const user: User = product;

// Even works if one of the interfaces had an extra property:

// interface Product {
//   id: number;
//   name: string;
// }

interface User2 {
  id: number;
  name: string;
  age: number;
}

const user2: User2 = { id: 1, name: "Cory", age: 30 };

// Allowed because the two interfaces have a compatible structure. But the age property is not used.
const product2: Product = user2;
console.log(product2);

// Error - No age property on Product.
// product2.age;


// Can't do the reverse. If I try to assign a `Product` to a `User`,
// TypeScript throws an error because the `Product` interface doesn't have the `age` property:
interface Product3 {
  id: number;
  name: string;
}

interface User3 {
  id: number;
  name: string;
  age: number;
}

const product3: Product3 = { id: 1, name: "Product 1" };

// This errors
// const user: User = product; // Error: Property 'age' is missing in type 'Product' but required in type 'User'.








// Exercise: Structural vs Nominal Types in TypeScript

// Question 1:
// Invoke the logPersonName function below with an instance of an `Employee`.
// Note that it works because Employee has a structure that's compatible with person.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  age: number;
  employeeId: number;
}

function logPersonName(person: Person): void {
  return console.log(person.name);
}

//answer
const employee: Employee = { name:"Max", age: 30, employeeId:12 }
logPersonName(employee)


// Question 2: Comment out the age property on Employee. What happens?



