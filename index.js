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
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'repository',
      message: 'Where do you want your file saved?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What do you want the title of your biography to be?',
    },
    {
      type: 'input',
      name: 'describe',
      message: 'Describe your application.',
    },
    {
      type: 'input',
      name: 'installation-instructions',
      message: 'Describe the installation instructions.',
    },
    {
      type: 'input',
      name: 'usage-information',
      message: 'Describe the usage information',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Describe the contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test-instructions',
      message: 'Describe the test instructions.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is the application covered under?',
      choices: ["Apache License 2.0", "BSD 3-Clause - New or Revised License",
      "BSD 2-Clause - Simplified or FreeBSD License", "GNU General Public License (GPL)",
      "GNU Library or Lesser General Public License (LGPL)", "MIT License", "Mozilla Public License 2.0", 
      "Common Development and Distribution License", "Eclipse Public License Version 2.0"]
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
