"use strict";
// write a ts program, that reshape the input array [2,5,10,20] 
// to multiply by 2 and print the new list
var list = [2, 5, 10, 20];
var newList = list.map((element) => element * 2);
console.log("newList", newList);
// for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     newList.push(element * 2)
// }
// list.forEach(element => {
//     newList.push(element*2)
// });
// var userNames: string[] = ["Naveed", "Ali", "Umar", "Farooq", "Faizan"]
// function mapFunc(value:string, i:number, arr:string[]) {
//     console.log("value",value);
//     console.log("i",i);
//     console.log("arr",arr);
//      return value
//     // if (i % 2 == 0) {
//     //     return value
//     // }
// }
// var list:string[] = userNames.forEach(mapFunc)
// var list:number[]  = userNames.map(mapFunc)
// var list:number[] = userNames.filter(mapFunc)
// console.log("list",list);
// userNames.forEach((userName: string, index: number, fullArr: string[]) => {
//     console.log("getValue ->", userName);
//     console.log("getValue -> index", index);
//     console.log("getValue -> fullArr", fullArr);
// });
// for (let index = 0; index < userNames.length; index++) {
//     const userName = userNames[index];
//     console.log("userName", userName);
// }
// const getValue = (userName: string, index: number, fullArr: string[]) => {
//     console.log("getValue ->", userName);
//     console.log("getValue -> index", index);
//     console.log("getValue -> fullArr", fullArr);
// }
