// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
console.log("welcome to my readMe generator, answer the following questions to create a README.md")
// TODO: Create an array of questions for user input
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
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
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    }
]);
};
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
// TODO: Create a function to write README file
//     fs.writeFile('README.md', readMeContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created README.md!')
//     );
//   });




 

// TODO: Create a function to initialize app
function init() { 
    questions()
}

// Function call to initialize app
init();
