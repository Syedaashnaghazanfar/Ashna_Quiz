#! /usr/bin/env node
import { select } from "@inquirer/prompts";
import chalk from "chalk";
console.log(chalk.bold.italic.blueBright("\t *** Quiz --- Ashna Ghazanfar *** \t"));
console.log("-".repeat(70));
let score = 0;
//question 1
let quizQ1 = await select({
    message: "Q1: What is the command for installing ts.config file in your computer? ",
    choices: [{ value: " 1 : npm init" }, { value: " 2 : tsc --init" }, { value: " 3 : npm i chalk" }, { value: " 4 : tsc main.ts" }]
});
if (quizQ1 === " 2 : tsc --init") {
    score++;
}
console.log("-".repeat(70));
//question 2
let quizQ2 = await select({
    message: "Q2: What is TypeScript primarily used for? ",
    choices: [{ value: " 1 : Memory Management" }, { value: " 2 : Dynamic Typing" }, { value: " 3 : Static Typing" }, { value: " 4 : Asynchronous operations" }]
});
if (quizQ2 === " 3 : Static Typing") {
    score++;
}
console.log("-".repeat(70));
//question 3
let quizQ3 = await select({
    message: "Q3: Which of the following is NOT a valid TypeScript data type? ",
    choices: [{ value: " 1 : Void" }, { value: " 2 : Any" }, { value: " 3 : Dynamic" }, { value: " 4 : Tuple" }]
});
if (quizQ3 === " 3 : Dynamic") {
    score++;
}
console.log("-".repeat(70));
//question 4
let quizQ4 = await select({
    message: "Q4: How do you specify that a function does not return anything in TypeScript? ",
    choices: [{ value: " 1 : function myFunc(): undefined" }, { value: " 2 : function myFunc(): void" }, { value: " 3 : function myFunc(): null" }, { value: " 4 : function myFunc(): None" }]
});
if (quizQ4 === " 2 : function myFunc(): void") {
    score++;
}
console.log("-".repeat(70));
//question 5
let quizQ5 = await select({
    message: "Q5:  How do you define a custom type in TypeScript?",
    choices: [{ value: " 1 : interface" }, { value: " 2 : typedef" }, { value: " 3 : type" }, { value: " 4 : Both A and C" }]
});
if (quizQ5 === " 4 : Both A and C") {
    score++;
}
console.log("-".repeat(70));
//question 6
let quizQ6 = await select({
    message: "Q6: What is the primary purpose of TypeScript interfaces? ",
    choices: [{ value: " 1 : To create new classes" }, { value: " 2 : To describe the shape of an object" }, { value: " 3 : To manage asynchronous code" }, { value: " 4 : To generate HTML templates" }]
});
if (quizQ6 === " 2 : To describe the shape of an object") {
    score++;
}
console.log("-".repeat(70));
//question 7
let quizQ7 = await select({
    message: "Q7: Which TypeScript feature allows for checking the type of a variable at runtime? ",
    choices: [{ value: " 1 : Runtime type" }, { value: " 2 : Dynamic type" }, { value: " 3 : Typeof" }, { value: " 4 : Type Guard" }]
});
if (quizQ7 === " 4 : Type Guard") {
    score++;
}
console.log("-".repeat(70));
//scores management...
if (score === 7) {
    console.log(chalk.green("Congratulations! you answered all questions correct"));
    console.log(chalk.blue(` * Your score : ${score}`));
}
if (score < 6) {
    console.log(chalk.yellow("Not bad but still need improvement!"));
    console.log(chalk.blue(` * Your score : ${score}`));
}
if (score === 0) {
    console.log(chalk.red("You need more practise,your score is 0"));
}
console.log("-".repeat(70));
console.log(chalk.greenBright("\t Keep practising! \t"));
console.log("-".repeat(70));
