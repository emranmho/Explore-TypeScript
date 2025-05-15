import {hello, Product} from "./types"
import {Person, Employee} from "./person.types"

const product: Product = {
    name: "apple",
    price: 323
}

console.log(hello)




// 1. Create person.types.ts. Add a type alias named `Person` with the following properties:
//    - name: string
//    - age: number
//    - email: string

//done

// 2. In person.types.ts, define an interface named `Employee` that extends the `Person` type
//    and adds the following properties:
//    - employeeId: number
//    - department: string

//done

// 3. Export both the `Person` type and the `Employee` interface.
 
//done

// 4. Import the `Person` type and `Employee` interface at the top of this file.

//done

// 5. Create a variable named `person` of type `Person` and assign the required values to its properties.

const person: Person = {
    name: "Bob",
    age: 31,
    email: "bob@gmail.com"
}

// 6. Create a variable named `employee` of type `Employee` and assign appropriate values to its properties.

const employee: Employee = {
    name: "Alicer",
    age: 21,
    email: "alicer@gmail.com",
    employeeId: 112,
    department: "IT"
}