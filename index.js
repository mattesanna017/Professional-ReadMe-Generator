const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title_of_Project',
            message:'Type your Project Title:'
        },
    
        {
            type: 'input',
            name: 'description',
            message:'Describe your project in a nutshell:'
        },
    
        {
            type: 'input',
            name: 'installation',
            message:'How do you install your project?'
        },
    
        {
            type: 'input',
            name: 'usage',
            message:'What can you use your project for?'
        },
    
        {
            type: 'list',
            name: 'license',
            message:'Pick a license:',
            choices: [ "Apache License 2.0", "GNU General Public License v2.0","GNU General Public License v3.0","ISC License","MIT License","BLANK"]
        },
    
        {
            type: 'input',
            name: 'contribution',
            message:'How did you contribute for the Project?'
        },
    
        {
            type: 'input',
            name: 'test',
            message:'Explain how to test the Project:'
        },
    
        {
            type: 'input',
            name: 'github',
            message:'Type Github username for Questions:'
        },
    
        {
            type: 'input',
            name: 'email',
            message:'Type email for Questions:'
        },
    ])
    .then((answers) => {
    readMeRender(answers),
    licensePicked (answers)
    })

const readMeRender = (answers) => {
    readMe = `
    #${answers.title_of_Project}
    ${licenseImg}
        
    ##Description
    ${answers.description}
    
    ##Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contribution](#contribution)
    -[Test](#test)
    -[Questions](#questions)
    
    
    ##Installation
    ${answers.installation}.
    ##Usage
        ${answers.usage}.
    ##License
    ${licenseDescription}.
    ##Contribution
    ${answers.contribution}.
    ##Test 
    ${answers.test}.
    
    ##Questions
    For further question or any kind of issue, please visit https://github.com/${answers.github}, or contact ${answers.email}.
    `
    
    const fs = require('fs');
    fs.writeFile('README.md', readMe, (err, data) =>
    err ? console.error(error) : console.log("Your Project has been created!")
    );

}

let licenseDescription = "";
let licenseImg ="";

const licensePicked = (answers) => {
    if (answers.license === "Apache License 2.0"){
        licenseImg= "![license](https://img.shields.io/badge/license-Apache%20License%202.0-green)"
    } 

    if (answers.license === "GNU General Public License v2.0"){
        licenseImg= "![license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v2.0-green)"
    } 
    
    if (answers.license === "GNU General Public License v3.0"){
        licenseImg= "![license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)"
    } 
    
    if (answers.license === "ISC License"){
        licenseImg= "![license](https://img.shields.io/badge/license-ISC%20license-green)"
    } 
    
    if (answers.license === "MIT License"){
        licenseImg= "![license](https://img.shields.io/badge/license-MLT%20license-green)"
    }
    
    if (answers.license === "BLANK"){
        licenseImg=""
    }

      licenseDescription = "Licensed by" + answers.license
    
    
}