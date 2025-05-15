// 1. Create person.types.ts. Add a type alias named `Person` with the following properties:
//    - name: string
//    - age: number
//    - email: string

export type Person = {
    name: string,
    age: number,
    email: string
}

// 2. In person.types.ts, define an interface named `Employee` that extends the `Person` type
//    and adds the following properties:
//    - employeeId: number
//    - department: string

export interface Employee extends Person {
    employeeId: number,
    department: string
}

// 3. Export both the `Person` type and the `Employee` interface.

