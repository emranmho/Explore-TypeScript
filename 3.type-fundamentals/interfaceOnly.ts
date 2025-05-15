// Interface only features

// 1. Extend a class. Example:

interface Animal {
    name: string;
}

class BearClass implements Animal{
    name: "Bear";
}


// Interface only features
// 2. Declaration merging
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Cory",
  age: 22,
};