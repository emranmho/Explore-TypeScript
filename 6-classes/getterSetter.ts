// If get exists but there's no set, the property is readonly:
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  
  set name(value) {
    this._name = value;
  }

}

const person = new Person("Alice");
console.log(person.name); // Alice
 person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.



// Exercise: Class Getters and Setters in TypeScript

// Question 1:
// Create a class `BankAccount` with a private property `balance`.
// Add a getter `getBalance` and a setter `setBalance` to access and modify the `balance` property.
// Ensure that the balance cannot be set to a negative value.

class BankAccount {
  private _balance: number;

  constructor(balance: number) {
    this._balance = balance;
  }

  get getBalance(): number {
    return this._balance;
  }

  set setBalance(balance: number) {
    if (balance >= 0) {
      this._balance = balance;
    } else {
      throw new Error("Balance cannot be negative");
    }
  }
}

// Answer:
const account = new BankAccount(1000);
console.log(account.getBalance); // Output: 1000
account.setBalance = 1500;
console.log(account.getBalance); // Output: 1500
try {
  account.setBalance = -500; // This will throw an error
} catch (error) {
  console.error(error); // Output: Balance cannot be negative
}