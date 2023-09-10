import inquirer from "inquirer";

const answer = await inquirer.prompt({
  name: "answer",
  message: "Are you sure?",
  type: "confirm",
});

console.log(typeof answer.answer);
