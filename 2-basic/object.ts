const user = { name : "Corry"}

const upperCase = user.name.toUpperCase()

interface User{
    id: number,
    name: string
}

const cory : User = { id: 1, name: "Corry" }

type User2 = {
    id: number,
    name: string
}

const bob : User2 = { id: 1, name: "bob" }


interface UserWithProps {
    id: number,
    name: string
    [key: string]: any
}

const user3: UserWithProps={
    id: 1,
    name: "bob",
    // age: true
}


// Exercise: Typing Objects in TypeScript

// Question 1: Create an object literal representing a book with the following properties:
// - title: string
// - author: string
// - pages: number

// Question 2: If you try adding another property to the object literal book object, does TypeScript allow it?

// Question 3: Define an interface `Car` with the following properties:
// - make: string
// - model: string
// - year: number
// Then, create an object that conforms to this interface.

// Question 4: Define a type alias called `Car2` with the same shape as `Car`.
// Then, create an object that conforms to this type alias.

// Question 5: Create an interface called `Car3` with the same shape as `Car`,
// but allow any additional properties to be added.



//1
let book = {
    title: "ABC",
    author: "djfh",
    pages: 100
}


//3
interface Car {
    make: string,
    model: string,
    year: number
}

const myCar: Car = {
    make: "kjlefh",
    model: "sdfsd",
    year: 112312
}