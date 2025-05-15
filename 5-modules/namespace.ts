// namespace MyNamespace {
//   export const myVar = "Hello, world!";

//   const myPrivateVar = "This is private!";
// }

// console.log(MyNamespace.myVar);

// // This will not work because `myPrivateVar` is private.
// // console.log(MyNamespace.myPrivateVar);


// Extending a library via a namespace
// namespace JQueryExtensions {
//   export function highlight(element: JQuery): void {
//     element.css("background-color", "yellow");
//   }
// }

// // Usage with an existing library
// JQueryExtensions.highlight($(".my-element"));

// Using a nested namespace to group and encapsulate instead of a separate file
namespace App {
  export namespace Models {
    export interface User {
      id: number;
      name: string;
    }
  }

  // Nested namespace
  export namespace Utils {
    export function greet(user: Models.User): string {
      return `Hello, ${user.name}`;
    }

    function privateFunction(): void {
      console.log("This is private!");
    }
  }
}

const user: App.Models.User = { id: 1, name: "Alice" };
console.log(App.Utils.greet(user));

// This will not work because `privateFunction` is private.
// App.Utils.privateFunction();


// namespace can enhance an existing class
class User {
  constructor(id: number, name: string) {}
}

// Add static method to class via namespace
namespace User {
  export function fromJSON(json: string): User {
    const data = JSON.parse(json);
    return new User(data.id, data.name);
  }
}

const user2 = User.fromJSON('{ "id": 1, "name": "Alice" }');
console.log(user2);