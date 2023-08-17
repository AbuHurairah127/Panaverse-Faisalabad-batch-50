// Functions are used to make the code reusable.
// We can write a specific set of code in function body and call it any where in the file when ever we want.

// !Syntax
// function name(params: type) {
//      Body (Block of code)
// }

function sum() {
  let num1: number = 10;
  let num2: number = 20;
  let sum: number = num1 + num2;
  console.log(sum);
}

sum();
// Now the above given example is of a function that sum two number and print the value of the sum.
// Now whenever we call the function it performs the specific task
// -----------------------------------------------------------------------------------------------------------------------------------

// Function with parameters
// Use Case: Now let's say we have to perform sum of two numbers but we want the number changeable. So the solution is functions with parameters
// For this type of functions we can send data to function wherever we call it.

function sum2Numbers(num1: number, num2: number) {
  let sum: number = num1 + num2;
  console.log(sum);
}

sum2Numbers(30, 90);
// Now the above given example is of a function that takes two numbers and add them and print them
//  -------------------------------------------------------------------------------------------------------------------------------------
