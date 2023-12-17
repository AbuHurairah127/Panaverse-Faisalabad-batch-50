import inquirer from 'inquirer';
const questions = [{
        name: 'num1',
        type: 'number',
        message: "Enter number1"
    },
    {
        name: 'num2',
        type: 'number',
        message: "What number2"
    },
    {
        name: 'operations',
        type: 'list',
        message: "What number2",
        choices: ["*", "+", "-", "/"]
    }
];
var answers = inquirer.prompt(questions);
// console.log("answers",answers);
answers.then((answers) => {
    switch (answers.operations) {
        case "*":
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            break;
        case "+":
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            break;
        case "-":
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            break;
        case "/":
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            break;
        default:
            break;
    }
    // console.log("answers",answers);
})
    .catch((err) => {
    console.log("err", err);
});
console.log("this the log");
