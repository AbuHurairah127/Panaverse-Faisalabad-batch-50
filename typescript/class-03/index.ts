// Conditions

// In the condition, the value must be true or false (boolean type)
// - In typescript or generally javascript there are some values that are considered as falsy values such as 0, undefined, false and null.
// - All the other values are considered as truthy values.

// Single conditional
// !Syntax
// if (condition) {
//     Block of Code
// }
// The IF conditional is used we have to work only when the condition is true, it the condition is false
let age: number = 18; // number data-type

if (age >= 18) {
  console.log("You can vote");
}

// BiConditional
// !Syntax
// if (condition) {
// Block of code for true state
// } else {

// Block of code for false state
// }
//The IF...ELSE conditional is used when we have to address both states if the condition is true or false.
let age2: number = 20;
if (age2 >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// Multiple Conditionals
// !Syntax
// if (condition1) {
// This block of code will run when the condition1 return true.
// } else if (condition2) {
// This block of code will run when the condition2 return true.
// }else{
// This Block of code will run when all the conditions are wrong
// }
//The IF...ELSE...IF conditional is used when we have to address multiple states based on multiple conditions
if (age2 < 13) {
  console.log("You are a child.");
} else if (age2 >= 13 && age2 <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are Adult");
}

// Nested Conditionals
// !Syntax
// if (condition1){
//      Grand parent
//     if (condition2) {
//          Parent;
//         if (condition3) {
//              Child
//         }
//     }
// }
//The NESTED IF conditional is used when we have to address multiple states based on multiple conditions and we want if oone condition is true then the other one should work

let passedInPractical: boolean = true;
let passedInTheory: boolean = true;
let attendance: boolean = false;
if (passedInTheory) {
  if (passedInPractical) {
    if (attendance) {
      console.log("Pass");
    }
  }
}
// This condition can also be written as

if (passedInPractical && passedInTheory && attendance) {
  console.log("pass");
}
