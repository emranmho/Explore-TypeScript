// Inheritance looks like plain JS - use the `extends` keyword
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`
    );
  }
}


// Exercise: TypeScript Classes

// 1. Create a class called `Person` with the following properties:
//    - firstName: string
//    - lastName: string
//    - age: number
//    - fullName: a method that returns the full name of the person

class Person2 {
    firstName: string;
    lastName: string;
    age: number;
    
    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
}

// 2. Create a class called `Student` that extends the `Person` class with the following extra properties:
//    - studentId: number
//    - courses: string[]
//    - enroll: a method that takes a course name as a parameter and adds it to the courses array

class Student extends Person2{
    studentId: number;
    courses: string[];

    constructor(firstName: string, lastName: string, age: number, studentId: number){
        super(firstName,lastName,age);
        this.studentId = studentId;
        this.courses = [];
    }

    enroll(course: string){
        this.courses.push(course);
    }
}

// 3. Create an instance of the `Student` class and demonstrate the usage of its properties and methods.

const student= new Student("Ab","Bc",21,23123);
console.log(student.fullName());
student.enroll("OOP");
student.enroll("C#");
console.log(student.courses);
    