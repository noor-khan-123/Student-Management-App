#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//introduction
console.log(chalk.blueBright.bold.italic("Welcome to the Student Management System!"));
console.log(chalk.yellowBright("This program will help you manage your students' information."));
console.log(chalk.greenBright("Let's get started!"));


//generate random 5 digit student id
const generateStudentId: number = Math.floor(Math.random() * 90000 + 10000);
console.log(chalk.hex('#018391').italic(`Your Student ID is ${generateStudentId}.`));

//enroll students in the given courses

console.log(chalk.hex('#FFC300').bold("     Enrolling Students."));

let answer = await inquirer.prompt (
    [
        {
            name: "student",
            type: "input",
            message: "Enter Student name:",

        },
        {
            name: "courses",
            type: "list",
            message: "Select the courses:",
            choices: [
                "WEB Development", "Frontend Developer", "Backend Developer", "Full Stack Developer", " Graphics Designer"
            ],
        },
    ]
);

//course fees

const courseFee: {[key: string]: number } = {
    "WEB Development": 5000,
    "Frontend Developer": 7000,
    "Backend Developer": 8000,
    "Full Stack Developer": 11000,
    "Graphics Designer": 9000 
};
console.log(`  Course Fee: ${courseFee[answer.courses]}`);



//implementing the following operations enroll, view balance, pay tuition fees, show status, etc. 
//The status will show all the details of the student including name, id, courses enrolled and balance.

const myBalance = Math.floor(10000 + Math.random() * 1000);
console.log(chalk.hex('#018391').italic("Your Balance is $" + myBalance + "."));


//selecting paying method

let paymentMethod = await inquirer.prompt (
    [
        {
            name: "payment",
            type: "list",
            message: "Select the payment method:",
            choices: [
                "Credit Card", "Debit Card", "Cash", "Easy Paisa"
            ],
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to be paid:",   
        }
    ]
);

if(paymentMethod.amount == courseFee[answer.courses]) {
    console.log(chalk.hex('#018391').italic("You have successfully paid the tuition fees."));
} else {
    console.log(chalk.hex('#018391').italic("You have not paid the tuition fees."));
};

//view status

let status = await inquirer.prompt(
    [
        {
            name: "options",
            message: "What do you want to do next after this ?",
            type: "list",
            choices: ["See Status", "Exit"]        
        }
    ]
);

if(status.options === "See Status"){
    console.log(chalk.hex('#018391').italic("Your Status:"));
    console.log(chalk.hex('#018391').italic(`Name: ${answer.student}`));
    console.log(chalk.hex('#018391').italic("Student ID: " + generateStudentId));
    console.log(chalk.hex('#018391').italic("Courses Enrolled: " + answer.courses));
    console.log(chalk.hex('#018391').italic("Balance: $" + myBalance));
    console.log(chalk.hex('#018391').italic("Payment Method: " + paymentMethod.payment));
    console.log(chalk.hex('#018391').italic("Amount Paid: $" + paymentMethod.amount));
    console.log(chalk.hex('#018391').italic("Course Fee: $" + courseFee[answer.courses]));
    console.log(chalk.hex('#018391').italic("Thank you for using the Student Management System!"));
    console.log(chalk.hex('#018391').italic("Have a nice day!"));
    console.log(chalk.hex('#018391').italic("Goodbye!"));
} else {
    console.log(chalk.hex('#018391').italic("Exit"));
    console.log(chalk.hex('#018391').italic("Thank you for using the Student Management System!"));
    console.log(chalk.hex('#018391').italic("Have a nice day!"));
    console.log(chalk.hex('#018391').italic("Goodbye!"));
};
