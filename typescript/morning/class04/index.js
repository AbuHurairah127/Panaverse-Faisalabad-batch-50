"use strict";
var num1 = 10;
let num2 = 20;
num2 = 50;
const num3 = 30;
function printConsole() {
    var localVariable = 50;
    console.log("function", num1);
}
{
    var ifVariable = 15;
}
console.log("ifVariable", ifVariable);
// console.log("localVariable", localVariable);
printConsole();
// num3=50;
// write ts program that's calculate sum of two numbers 10, 20 using function, and add number 5 in result after calculation
// var sumArrow = (num1:number, num2:number):number=>num1 + num2
// var sumArrow = (num1:number, num2:number)=>{
// // var num1:number = 10;
// // var num2:number = 20;
//     var result:number = num1 + num2;
//     return result
//     console.log("result is ", result);
// }
// console.log(typeof sumArrow);
// var sumResult:number = sumArrow(10,20)
// console.log("sumResult", sumResult);
// var resultSum:number = sum(10,20)
// console.log(resultSum);
function sum(num1, num2) {
    // var num1:number = 10;
    // var num2:number = 20;
    var result = num1 + num2;
    return result;
    // var result2:number = num1+num2 + 10;
    // return result2;
    // console.log("result is =", result);
}
// var sumResult:number = sum(10,20)
// sumResult = sumResult + 5
// console.log("sumResult", sumResult);
// var sumResult:number = 30
// write ts program that's calculate sum of two numbers 20, 30 using function, and add number 40 in result after calculation
// var addResult:number = sum(20,30)
// addResult = addResult + 40
// console.log(addResult);
// write ts program that's calculate sum of two numbers 10, 20 using function
// function sum(num1:number, num2:number){
//     // var num1:number = 10;
//     // var num2:number = 20;
//     var result:number = num1 + num2;
//     console.log("result is =", result);
// }
// write ts program that's calculate sum of two numbers 20, 30 using function
// sum(20,30)
// write ts program that's calculate sum of two numbers 5, 2 using function
// sum(5,2)
// function sum2(){
//     var num1:number = 20;
//     var num2:number = 30;
//     var result:number = num1 + num2;
//     console.log("result is =", result);
// }
// sum2()
// function printConsole(){
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");
// }
// printConsole()
