interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };

// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.


// Also works with classes
class Point {
  constructor(readonly x: number, readonly y: number) {}
}

const point2 = new Point(10, 20);

// This fails
// point2.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.

// Use as const for object literals
const point3 = { x: 10, y: 20 } as const;

// This fails
// point3.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.






// Exercise: Using TypeScript's readonly feature

// 1. Mark age and address as readonly in the Person interface below.
// Then note that the modifications in the `updatePerson` function are not allowed.

interface Address {
  street: string;
  city: string;
}

interface Person {
  firstName: string;
  lastName: string;
  readonly age: number;
  readonly address: Address;
}

function updatePerson(person: Person) {
//   person.age = 30;
//   person.address = { street: "New Street", city: "New City" };
  console.log(person);
}

// 2. Make the personConst below immutable by marking `as const`.
// Then note that you cannot mutate the properties of the object below.

const personConst = {
  firstName: "John",
  lastName: "Doe",
} as const;

// Try to mutate person.age and person.address.
//personConst.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.