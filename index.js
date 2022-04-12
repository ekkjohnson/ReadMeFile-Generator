// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
inquirer
  .prompt([
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
        message: "What is the tilte of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
    },
    {
        type: "input",
        name: "license",
        message: "What licsense are you using?",
    },
])

.then((data) => {
    const generateMarkdown= generateMarkdown(data);

    fs.writeFile('README.md', generateMarkdown, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMe=`
   # ${fileName}
   ## ${questions.data}
    `
 }

// TODO: Create a function to initialize app
function init() { 
    questions()
}

// Function call to initialize app
init();
