function fail(message: string): never{
    throw new Error(message)
}

function infineLoop(): never{
    while(true){

    }
}

function example(x: number | string){
    if(typeof x === "number"){
        x.toFixed(2)
    } else if(typeof x === "string"){
        x.toUpperCase()
    } else{
        const f: never =x
        return f
    }
}








// Exercise: Understanding the `never` type in TypeScript

// 1. Type this function to return `never`.
function error(message: string): never {
  throw new Error(message);
}

// 2. Make the describeUser function's switch statement exhaustive using `never`.
interface Admin {
  kind: "admin";
  privileges: string[];
}

interface Guest {
  kind: "guest";
  visitCount: number;
}

type User = Admin | Guest;

function describeUser(user: User): string {
  switch (user.kind) {
    case "admin":
      return `An admin with privileges: ${user.privileges.join(", ")}.`;
    case "guest":
      return `A guest with ${user.visitCount} visits.`;
    default:
        const ex: never = user
        return ex 
  }
}

// Test the functions above by uncommenting the following lines one by one and observing the behavior:

// error("This is an error message");
// fail();
// console.log(isString("test")); // Should return true
// console.log(isString(123)); // Should throw an error