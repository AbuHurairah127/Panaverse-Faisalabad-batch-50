"use strict";
var cars = [{
        company: "honda",
        isUsedCar: true,
        year: 2019,
    }, {
        company: "toyota",
        isUsedCar: false,
        year: 2023,
    },
    {
        company: "toyota",
        isUsedCar: false,
        year: 2023,
    },
    {
        company: "toyota",
        isUsedCar: false,
        year: 2023,
    }
];
let userNames = ["Umar", "Ali", "Naveed"];
for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    // console.log("car>", car.year);
    if (car.company == "honda") {
        console.log("car>", car.year);
    }
}
// console.log(cars[0].year, cars[1].year);
// var car: CarType = {
//   company: "honda",
//   isUsedCar: false,
//   year: 2023,
// }
// var userName: string = "sfd"
// var car1: CarType = {
//   isUsedCar: false,
//   year: 2023,
// }
// let userNames: string[] = ["Umar", "Ali", "Naveed"]
// var tweets = [{id:1, title: 'sf', description:"afds"}, ]
// let userName: string = "Naveed";
// let userNames: string[] = ["Umar", "Ali", "Naveed"]
// // let car:string[] = ["color", "price","22k", "company", "honda", "white",]
// // car[1]
// var car = {
//   company: "honda",
//   color: "white",
//   year: 2023,
//   isUsedCar: false,
//   run: function () {
//     // code card run
//   },
//   stop: (a: number, b: number) => {
//     // code
//     return a + b
//   }
// }
// let car1 = {
//   company: 'toyota',
//   color: "black"
// }
// let car2 = {
//   company: 'kia',
//   color: "gray"
// }
// var cars = [car,car1, car2]
// var cars = [{
//   company: 'kia',
//   color: "gray"
// },
// {
//   company: 'toyota',
//   color: "black"
// }
// ]
// let car5 = cars[0]
// console.log("cars", car5.color);
