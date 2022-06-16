const inquirer = require("inquirer");
// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if(err) throw err;

//     console.log('Portfolio complete! Checkout index.html to see the output');
// });

const promptUser = () => {
    return inquirer.prompt([
        //Ask for username
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        //ask for github username
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username: "
        },
        //ask for user description
        {
            type: "input",
            name: "about",
            message: "Provide some info about yourself: "
        }
    ])
}

const promptProject = portfolioData => {
    if(!portfolioData.projects){
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a new Project
    =================
    `);
    return inquirer.prompt([
        //project name
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter your project name!");
                    return false;
                }
            }
        },
        //project description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: description => {
                if (description){
                    return true;
                } else {
                    console.log("Please enter a project description");
                    return false;
                }
            }
        },
        //project language makeup
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        //project link
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: link => {
                if (link){
                    return true;
                } else {
                    console.log("Please enter project link!");
                    return false;
                }
            }
        },
        //wether or not the project should be a main focus
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        //ask if the user would like to input more projects
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
}

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    })