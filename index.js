// TODO: 
// Using a command-line application that accepts user input that prompts for information about an application
// repository that generates a README.md with the following sections
//      Title of the project
//      Sections: entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests,
//      and Questions
// Prompt for info for the following sections: description, installation instructions, usage information,
// contribution guidelines, and test instructions
// The title of the project will be the title of the README generated
// Have a list of options for the license choice that adds a badge for that license near the top of the README
// and add a notice to the License section that explains which license the application is covered under
// Prompt for the GitHub username and ass to the section of the README entitled Questions, with a link to the
// GitHub profile
// Prompt for an email address and add it to the section of the README entitled Questions, with instructions on
// how to reach me with additional questions
// Make the links in the Table of Contents take you to the corresponding section of the README

// TODO: Include packages needed for this application
    const fs = require("fs");
    const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
    const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ['What do you want the title of your application to be?', 'Describe your application.', 
'Describe the installation instructions.', 'Describe the usage information', 
'Describe the contribution guidelines.', 'Describe the test instructions.', 
'What license is the application covered under?', 'What is your github username?', 
'What is your email address?'];

// TODO: Create a function to write README file



function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'describe',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ["Apache License 2.0", "BSD 3-Clause - New or Revised License",
            "BSD 2-Clause - Simplified or FreeBSD License", "GNU General Public License (GPL)",
            "GNU Library or Lesser General Public License (LGPL)", "MIT License", "Mozilla Public License 2.0", 
            "Boost Software License 1.0", "Eclipse Public License Version 2.0", "IBM Public License Version 1.0", 
            "ISC License (ISC)"]
       },
       {
         type: 'input',
         name: 'github',
         message: questions[7],
       },
       {
         type: 'input',
         name: 'email',
         message: questions[8],
       }
    ])
    .then((data) => {
        const fileName = "README.md";
        writeToFile(fileName, data);
    });
}       

// Function call to initialize app
init();
