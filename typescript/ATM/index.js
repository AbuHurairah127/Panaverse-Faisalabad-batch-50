#! /usr/bin/env node
import inquirer from "inquirer";
const users = [
    {
        username: "ali12",
        pin: "1234",
        balance: 540002,
    },
    {
        username: "johnDoe99",
        pin: "5678",
        balance: 7500,
    },
    {
        username: "sarahSmith78",
        pin: "9876",
        balance: 12500,
    },
    {
        username: "mikeBrown55",
        pin: "2468",
        balance: 60000,
    },
    {
        username: "emilyTaylor22",
        pin: "1357",
        balance: 23000,
    },
];
const loginData = await inquirer.prompt([
    {
        name: "username",
        type: "input",
        message: "Enter your username?",
    },
    {
        name: "PIN",
        type: "password",
        message: "Enter your secret PIN?",
        mask: "*",
        validate(input) {
            if (input.length === 4) {
                return true;
            }
            return false;
        },
    },
]);
const loggedInUser = users.find((user) => user.username === loginData.username && user.pin === loginData.PIN);
if (loggedInUser) {
    console.log(`Welcome back ${loginData.username}!`);
    const options = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Choose what you wanna do?",
            choices: ["CHECK_ACCOUNT_BALANCE" /* OPTIONS.CHECK_ACCOUNT_BALANCE */, "WITHDRAW_MONEY" /* OPTIONS.WITHDRAW_MONEY */],
        },
    ]);
    if (options.option === "CHECK_ACCOUNT_BALANCE" /* OPTIONS.CHECK_ACCOUNT_BALANCE */) {
        console.log(`Your account balance is = ${loggedInUser.balance}`);
    }
}
else {
    console.log(`Username or Password is incorrect.`);
}
