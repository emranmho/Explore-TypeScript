let age: any = 12
age= "udf sdkjfh"

function logValue(value: any){
    console.log(value)
}

logValue(6)
logValue("Hello")


async function getUserById(id: number){
    const resp = await fetch("http://example.com/user/1")
    return resp.json();
}

let user12 = getUserById(1)

function add(a, b){
    return a + b
}


// Exercise: Understanding the `any` type in TypeScript

// 1. Declare a variable with the `any` type and assign it a string value.
let name4: any = "erer"

// 2. Reassign the variable to a number.
name4= 54
// 3. Reassign the variable to an object with a name property that's set to "TS".
name4 = {
    name: "TS"
}
// 4. Create a function that accepts a parameter of type `any` and logs its type and value.

function logValue2(value: any){
    console.log(value)
}

logValue2(6)

// 5. Call the function with different types of arguments (string, number, object, array).
logValue2("Hello")

// 6. Explain why using `any` can be both useful and potentially problematic in TypeScript.