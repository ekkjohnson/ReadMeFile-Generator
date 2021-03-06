// TODO: Include packages needed for this application
const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project",
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please add installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add any usage information.'
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Please add contribution guidelines.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please add any testing instructions.'
        },
        {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT License', 'Apache License']
        }
    ];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.log('error');
        } else {

        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers)
        })
}

// Function call to initialize app
init();
