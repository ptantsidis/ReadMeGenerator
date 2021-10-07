// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const questions = [{

    type: 'input',
    name: 'title',
    message: "What is the title?",
},
{
    type: 'input',
    name: 'desc',
    message: "Briefly describe",
},
{
    type: 'input',
    name: 'install',
    message: "Installation?",

},
{
    type: 'input',
    name: 'usage',
    message: "Usage?",

},
{
    type: 'rawlist',
    name: 'license',
    message: "License?",
    choices: ['MIT', 'ISC', 'MPL']

},
{
    type: 'input',
    name: 'contribution',
    message: "Contibuting?",
},
{
    type: 'input',
    name: 'test',
    message: "Tests?",
},
{
    type: 'input',
    name: 'question',
    message: "Questions",
},
{
    type: 'input',
    name: 'GitHubName',
    message: "GitHub Username?",
},
{
    type: 'password',
    name: 'GitHubPassword',
    message: "Password?",
},
{
    type: 'input',
    name: 'GitHubRepo',
    message: "GitHub Repo?",
},
{
    type: 'input',
    name: 'images',
    message: "Images?",
}]

// // TODO: Create a function to write README file
//    function writeToFile(fileName, data) {}
function init() {
    inquirer.prompt(questions).then(async function (response) {
        console.log(response)

        let result = await generateMarkdown(response)

        console.log(result)
        fs.writeFileSync("OUTPUT_README.md", result, function (err, data) {
            if (err) throw err;
            console.log("README")
        })
        console.log("README Completed")
    });
}




init()
