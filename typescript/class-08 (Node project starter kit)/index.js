import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "answer",
    message: "Are you sure?",
    type: "number",
    validate: async (input) => {
        if (typeof input !== "number") {
            return false; // Return false for invalid input
        }
        return true; // Return true for valid input
    },
});
console.log(typeof answer.answer);
