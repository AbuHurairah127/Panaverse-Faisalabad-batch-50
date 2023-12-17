"use strict";
// write a ts program, that calculate sum of odd numbers between 1 - 100, and list all the even that particapte in sum calculation, print the list along sum
let sum = 2;
let list = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
        list.push(i);
        // console.log("i", i);
    }
}
console.log("sum", sum, list);
// write a ts program, that calculate sum of even numbers between 1 - 100;
// let sum:number = 2;
// for(let i=1; i<=100; i++){
//   if (i%2 == 0) {
//    sum = sum + i
//    // console.log("i", i);
//   }
// }
// console.log("sum", sum);
// var i:number = 10;
// do{
//    console.log("Naveed");
//    i++;
// }while(i <= 30)
// for(let index=10; index < 20; index++){
//    console.log("Naveed",index);
// }
// var i:number = 12;
// while(i>10){
//    console.log("Naveed", i);
//  --i;
// }
// i++
// var result:number = 2 + 4 +  i++;
// var result:number = 2 + 4 +  ++i;
// ++i
// i--
// --i
// console.log("i",i);
// console.log("result",result);
