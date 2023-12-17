"use strict";
// write a typscript program, that calculate sum of odd numbers in between 1- 100, and make the list of all even numbers and print along sum;
var sum = 0;
var list = [];
for (let index = 1; index <= 100; index++) {
    if (index % 2 != 0) {
        sum = sum + index;
        list.push(index);
    }
}
console.log("sum", sum, list);
// write a typscript program, that calculate sum of even numbers in between 1- 1000;
// var sum:number = 0;
// for (let index = 1; index <= 1000; index++) {
//    if (index % 2 == 0) {
//     sum = sum + index;
//    }
// }
// console.log("sum", sum);
// function something(params:type) {
//   if (condition) {
//     for (let index = 0; index < array.length; index++) {
//       const element = array[index];
//       let array:
//     }
//   }
// }
// something()
// let i:number = 1;
// do {
//   console.log(" do while Naveed", i);
//   i--
// }while(i < 10)
// while(i < 10){
//   console.log("Naveed While Loop",i);
//   i++
// }
// for(let index =10; index>=5; index--){
//   console.log("Naveed", index);
// }
// for(let index=1;index < 10;index++){
//   console.log(index);
// }
// while(index < 10){
//   console.log(index);
//   index++
// }
// console.log("console");
// var result:number = index++
// var result:number = ++index
// console.log("index", index);
// console.log("result", result);
// ++index;
// --index;
// console.log("index", index);
