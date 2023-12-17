"use strict";
// var result:number = 5 + 2 * 10 / 2 - 5 * 2 + 2 < 2 
// var result:boolean = !(5 < 2 || 10 > 8);
// var output:boolean = ((10 + 5) * 3 - 2) / (4 % 3)  - 7 - 31 == 5
// console.log(output);
// c((10 + 5) * 3 - 2) / (4 % 3)  - 7
// (45 - 2) / (4 % 3)  - 7
// (43) / (4 % 3)  - 7
// 43 / 1  - 7
// 43 - 7
// 36
// var output:boolean = ((10 + 5) * 3 - 2) / (4 % 3)  - 7 - 31 == 25
// if(((10 + 5) * 3 - 2) / (4 % 3)  - 7 - 31 == 5){ 
//     console.log("first print");
// }
// if(2<5){
//     console.log("Parent");
//     if(3 < 1){
//         console.log("1st child ");
//         if(10 == 10){
//             console.log("nested child k");
//         }
//     }
// }
var num1 = 30;
var num2 = 20;
if (num1 >= num2) {
    console.log("num1 is greater than number 2");
}
else {
    console.log("num1 is less than number 2");
}
// write a program, that calculate student grade, if user marks is greater than 80 grade will be A, if marks between 70 and 80 grade will be B, ... if less than 50 result should be Fail 
var marks = 65;
if (marks >= 80) {
    console.log("Student Grade is A");
}
if (marks < 80 && marks >= 70) {
    console.log("Student Grade is B");
}
if (marks < 70 && marks >= 60) {
    console.log("Student Grade is C");
}
if (marks < 60 && marks >= 50) {
    console.log("Student Grade is D");
}
if (marks < 50) {
    console.log("Student Grade is F");
}
// if(5 > 10 - 6){
//     console.log("third print");
// }
// if (loginEmail == signupEmail && loginPassword == signupPassword) {
//     console.log("user is able to logged in");
// }
