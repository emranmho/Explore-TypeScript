// Specifying return type of unknown instead of any
async function getUserAge(id: number): Promise<unknown> {
  const resp = await fetch("http://example.com/user/" + id);
  return resp.json();
}

function isOldEnoughToVote(age: number): boolean {
  return age >= 18;
}

async function process() {
  const age = await getUserAge(1);
  // Must narrow type before using
  if (typeof age === "number") {
    console.log(isOldEnoughToVote(age));
  }
}

// Exercise: Working with the `unknown` type in TypeScript

// 1. Declare a variable of type `unknown` and assign a value to it.
let unknownValue: unknown = "Hello TS"
// 2. Write a function `isString` that takes an argument of type `unknown`
// and returns true if the argument is a string.
function isString(value: unknown){
    if(typeof value === "boolean"){
        return "good"
    }
}
// 3. Call the isString function above to check if the `unknownValue` is a string,
// and if so, log its length to the console.
if(isString(unknownValue)){
    console.log("Is string")
} else{
    console.log("Not string")
}