import chalk from "chalk";
import countries from "./countries.json" assert { type: "json" };
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    if (element.name.slice(0, 1) == "P") {
        console.log(`Country Name is=` + chalk.white.bgRed.bold(element.name) + " Country is =" + chalk.white.bgGreen.bold(element.code));
    }
}
// import inquirer, { Answers } from "inquirer";
// async function paymentProcess(){
//    try {
//      // await paymentDeduct
//     //  pdf
//     // word
//     // console.log("before error try");
//     // let a:number = 10;
//     const answer:Answers = await inquirer.prompt([{
//         type:"number",
//         name:"score",
//         message:"Enter your marks betweek 0 - 100"
//     }])
//     if (answer.score > 100 || answer.score < 0) {
//         throw new Error("Enter correct marks!")
//     };
//    } catch (error) {
//      console.log(" catch error", error);
//    }
//    finally{
//     console.log("finally");
//     // loader turn off
//    }
// }
// paymentProcess()
// try{
//     // payment deduct from user card
//     await paymentDeduct
// order create
// }
// catch(error){
// console.log("error while doing payment processing", error);
// }
// import inquirer, { Answers, QuestionCollection } from 'inquirer'
// const questions:QuestionCollection = [{
//     type:"number",
//     name:"num1",
//     message:"enter number 1"
// },
// {
//     type:"number",
//     name:"num2",
//     message:"enter number 2"
// }
// ]
// try{
//     const answers:Answers =   await inquirer.prompt(questions)
// }
// catch(error){
// console.log("error",error);
// }
// finally{
// }
// var sum:number = 10 * 10;
// console.log("sum is", sum);
// console.log("sum is =", result.num1 + result.num2);
// async function userInput() {
//   const result =   await inquirer.prompt([{
//         type:"number",
//         name:"num1",
//         message:"enter number 1"
//     }])
//     console.log("result",result);
//     console.log("depend on user input");
// }
// userInput()
// console.log("after input");
// const result = inquirer.prompt([{
//     type:"number",
//     name:"num1",
//     message:"enter number 1"
// }])
// result.then((ans)=>{
//     console.log("ans",ans);
//     if (ans.num1 == 10) {
//         const response = inquirer.prompt([{
//             type:"number",
//             name:"num2",
//             message:"enter number 2"
//         }])
//         response.then((ans)=>{
//         console.log("ans",ans);
//         })
//         .catch((err)=>{
//             console.log("err",err);
//         })
//     }
// })
// .catch((err)=>{
//   console.log("err",err);
// })
// console.log("after input");
// console.log("before pdf create");
// async function createPDFFile() {
//     await  // logic PDF create 2min
//     console.log("PDF file is created");
// }
// const createWordFile = async()=>{
// }
// createPDFFile()
// console.log("after pdf create");
