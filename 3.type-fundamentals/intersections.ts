//type intersection

type Admin = {role: string}
type User = {name: string}

type UserAdmin = User & Admin

const user: UserAdmin = {
    name: "Max",
    role: "Admin"
}


// Exercise: Type Intersections in TypeScript

// Question 1:
// Given the two interfaces below, create a new type `Staff`
// that's an intersection of `Person` and `Employee`.
// Then, create a variable `staff` of type `Staff` and assign some values to it.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type staff = Person & Employee

const staffMember: staff = {
    name: "Jerry",
    age: 22,
    employeeId: 11,
    department: "IT"
}