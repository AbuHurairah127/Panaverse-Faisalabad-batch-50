import inquirer from "inquirer";
let questions = [{ name: 'age', type: 'number', message: "enter age" }];
const result = await inquirer.prompt(questions);
console.log("result", result);
// console.log("before async code");
// function thenFunc(success) {
//     console.log("thenFunc",success);
// }
// function catchFunc(error) {
//     console.log("catchFunc",error);
// }
// function AsynFunction(resolve:any, reject:any ) {
// // internt code
//     if (false) {
//          resolve("data")
//     }
//     else {
//         reject("something went wrongt")
//     }
// }
// var result = new Promise(AsynFunction)
// result.then(thenFunc)
// .catch(catchFunc)
// function mapFunc(element, index, arr) {
// }
// let data:number[] = [1,2,3,]
// data.map(mapFunc)
// // setTimeout(AsynFunction, 1000)
// console.log("after async code");
// console.log("before async");
// let setIntervalOutID:number = 0;
// setIntervalOutID = setInterval(()=>{
//     console.log("setTimeout async");
// }, 10000)
// if (true) {
//     clearInterval(setIntervalOutID)
// }
// console.log("after async");
// type CarType = {
//     price: number,
//     color: string 
//     startCar: ()=> number
// }
// class Car{
//   price:number = 0;
//   color:string = 'not defined'
//   constructor(color:string, price:number){
//     this.price = price;
//     this.color = color
//    console.log("constructor");
//   }
//   startCar  = ()=> {
//     console.log("startCar");
//     return 0
//   }
// }
// let carA:CarType =  new Car("red", 234)
// carA.startCar()
// let carB:CarType = new Car("blue", 351)
// console.log("carA",carA);
// console.log("carB",carB);
// let car:{} = {
//     price: 234,
//     color:'red'
// }
// console.log("before async code");
// function doSomething() {
//     console.log("print doSomething");
// }
// let setTimeOutId:number = 0;
// setTimeOutId = setTimeout(doSomething, 1000)
// console.log("");
// clearTimeout(setTimeOutId)
