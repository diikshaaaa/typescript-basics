export {};
// this statement exports nothing. 
// it is added to remove an error of block scoped variable
// here 'message' is block-scoped so we can cannot redeclare it and it will generate an error.
// to remove that error we added export{};  
let message = 'Welcome back!';
console.log(message);

// Variable Declaration
let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

// Basic Variable Types
let isBeginner: boolean = true;
// here we are declaring data type of variable 'isBeginner' 
let total: number = 0;
let name: string = 'Vishwas';

let sentence: string = `My name is ${name}I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;
// here null and undefined are also the types in typescript
// here n, u are variable names 

let isNew: boolean = null;
let myName: string = undefined;

// Array type

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// Tuple type

let person1: [string, number] = ['Chris', 22];

// Enum type
enum Color {Red, Green, Blue}
// Enums stands for Enumerations. Enums are a new data type supported in TypeScript. It is used to define the set of named constants, i.e., a collection of related values. TypeScript supports both numeric and string-based enums. 
// difference between enums and classes
// An enum cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).
// Array will hold same type of data while enum can hold different datatypes at a time. 
let c: Color = Color.Blue;
console.log(c);

// Any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

// Unknown type
let myVariable: any = 10;
console.log(myVariable.name.firstName);
myVariable();
myVariable.toUpperCase();

// Type inference
let a;
a = 10;
a = true;

let b = 10;

// Union Types
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

// Functions

function add(num1: number, num2: number = 10): number {
// If we want to explicitly specify the type of the returned value, we can do it simply by adding it in the function definition after the parameters, like this: function addNumbers(num1: number, num2: number): number {...}
  if (num2)
    return num1 + num2;
  else
    return num1;
}

add(5, 10);
add(5);

// Interfaces
// interface keyword is used to declare an interface
// suppose there is a property named address and we want to use in different fundtions
// but if we will write it every time it will waste our time, this is where interface is used 
// an interface defines the properties and type an object can have

interface Person {
  firstName: string;
  lastName?: string;
  // ? means lastname may or may not exist
}

function fullName(person: Person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let p = {
  firstName: 'Bruce'
};
fullName(p);

// Classes
// class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object

class Employee {
  employeeName: string;

  constructor(name: string) {
  // Constructor is a special type of method of a class and it will be automatically invoked when an instance of the class is created
    this.employeeName = name;
  // this keyword refers to the current object
  // at compile time type of this in function is any
  }

  greet() {
    console.log('Good morning ' + this.employeeName);
  }
}

let emp1 = new Employee('Vishwas');
// New keyword is used to create an instance of an object that has a constructor function. On calling the constructor function with 'new' operator, the following actions are taken: A new empty object is created. 'this' variable is made to point to the newly created object
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
// extends keyword is used to create a child class of another class (parent). 
  constructor(managerName: string) {
    super(managerName);
    // super keyword is used to call the constructor of its parent class to access the parent's properties and methods. 
  }
  delegateWork() {
    console.log('Manager delgating tasks' + this.employeeName);
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
