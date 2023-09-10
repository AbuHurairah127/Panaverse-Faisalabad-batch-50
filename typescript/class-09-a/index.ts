import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter the first number?",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number?",
    },
    {
      name: "operation",
      type: "list",
      message: "Enter the operation?",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ])
  .then((answer) => {
    console.log(answer);
    switch (answer.operation) {
      case "Addition":
        console.log(answer.num1 + answer.num2);
        break;
      case "Subtraction":
        console.log(answer.num1 - answer.num2);
        break;
      default:
        break;
    }
  });
