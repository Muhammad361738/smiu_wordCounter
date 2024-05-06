#! /usr/bin/env node
// importing inquirer and chalk from packeges
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colorful welcome message
console.log(chalk.bold.blue("\n \t\t Welcome To Muhammad Talha Word counter "));
console.log("=".repeat(60));
// prompt the the user to enter a Sentence
let answer = await inquirer.prompt([
    { name: "sentence",
        type: "input",
        message: "Enter a sentence ",
    }
]);
// Triming the sentence and splitting it into words based on "space"
let words = answer.sentence.trim().split(" ");
// Analyse the user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("sentence Words : "));
console.log(words);
console.log(chalk.bold(`\n word count : ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
