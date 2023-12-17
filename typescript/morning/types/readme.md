### List of Types in typescript
## Basic Types:
let num: number = 42;
let str: string = "Hello, TypeScript!";
let isTrue: boolean = true;
let nullable: null = null;
let undef: undefined = undefined;
let noReturn: void = undefined;
let dynamic: any = "I can be anything!";
let unKnownVar:unknown = 23;
let neverFunc = (): never => {
  throw new Error("This function never returns!");
};
// never Represents values that will never occur (e.g., function never returns or always throws).

## Object Type:
let person: object = { name: "John", age: 30 };

## Array

let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["Alice", 25];
let readOnlyArray: readonly number[] = [1, 2, 3];


## Function Types:
function concatenateStrings(...args: string[]): string {
    return args.join(" ");
  }
  const result:string = concatenateStrings("Hello", "TypeScript", "World")

##  Union Type:
let value: string | number = "Hello";

## Type Aliases
type emailType = {
    email: string
    id?:number // Optional property
}
type phoneType = {
    phone:number
}

## Intersection Types
let user: emailType & phoneType = {
    email:"naveed@techloset.com",
    phone:2342
}

## Enum
enum Color { Red, Green, Blue }
let favoriteColor: Color = Color.Red;



##  Generics:
function identity<T>(value: T): T {
    return value;
  }
let output: number = identity(42);
let output1: string = identity("any string value");
// example

function swap<T>(arr:T[]): [T, T] {
    return [arr[1],arr[0]];
  }
  
  // Using the generic function
  const numResult:number[] = swap([10,20]); // result is [20, 10]
  const textResult:string[] = swap(["hello", "world"]);

 ## Type Interfaces:
interface Shape {
    name: string;
    age?: number; // Optional property
    draw(x: number, y: number): void;
  }

interface CIRCLE extends Shape {
    color:string
}
