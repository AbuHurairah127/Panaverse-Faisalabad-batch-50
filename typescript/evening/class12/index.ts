import chalk from 'chalk';
import data from "./data.json" assert {type:"json"}



for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (index % 2 ==0 ) {
        console.log("data", chalk.bgYellowBright.white.bold(element.email), chalk.bgBlueBright(element.id));
    }
    else{
        console.log("data", chalk.bgRed.white.bold(element.email), chalk.bgGreen(element.id));
    }
    
}

// 1- synyax error
// examples
// try {
//     letc a:number = 10;
// ify ()
// fora

// } catch (error) {
//     console.log("catch syntax errr",error);
    
// }


// import inquirer from "inquirer";
// console.log("line 10");


// // 2- runtime erorrs

// async function userInput() {
//     try {

//         console.log("try block before inquirer");
        
    
//         const output = await inquirer.prompt([
//             {
//                 type:"number",
//                 name:"num1",
//                 message:"enter number 1"
//             }
//         ])
//     if (output.num1 > 100 || output.num1 < 0) {
//         throw new Error("Please enter value between 0 - 100");

        
        
//     }
       
        
    
//         console.log("try block after inquirer");
    
        
//     } catch (error) {
//         console.log("error",error);
        
//     }
//     finally{
//         console.log("finally");
        
//     }
//     console.log("line 34");
// }

// userInput()


// 3- logical errors
// var num1:number = 10;
// var num2:number = 20;
// var sum:number = num1 * num2;
// console.log("sum",sum);







// import inquirer  from "inquirer"
// // user subject score 
// console.log('first')

// // var result = inquirer.prompt([{
// //     type:"number",
// //     name:"num1",
// //     message:"Enter num1"
// // }])

// // result.then((success)=>{
// //     var promise = inquirer.prompt([{
// //         type:"number",
// //         name:"num2",
// //         message:"Enter num2"
// //     }])
// //     promise.then((success)=>{
// //       console.log("success",success);
      
// //     })
// //     .catch((err)=>{
// //         console.log("err",err);
        
// //      })
// // })

// // .catch((err)=>{
// //    console.log("err",err);
   
// // })

// async function uploadUsers() {
//     var result = await inquirer.prompt([{
//         type:"number",
//         name:"num1",
//         message:"Enter num1"
//     }])
  
//     console.log("result",result);
    
//     if (result.num1 > 50) {
//         var result1= await inquirer.prompt([{
//             type:"number",
//             name:"num2",
//             message:"Enter num2"
//         }])

//         if (result1.num2 > 20) {
//             var result2 = await inquirer.prompt([{
//                 type:"number",
//                 name:"num3",
//                 message:"Enter num3"
//             }])
//         }
//     }

//     console.log('second')  // 2min
// }

// uploadUsers()
// console.log('Third')
