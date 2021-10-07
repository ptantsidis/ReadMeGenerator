// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT' :
     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
         break;
    case 'ISC':
     return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    
      break;

    case 'MPL':
     return`//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
       break;
    default:
      return 'No'
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(response) {
  console.log(response)
  var license = await renderLicenseBadge(response.license)
  return `# ${response.title}

  ## ${license} 
  
  ## ${response.desc}
  
  ## Table of Contents

  *[Installation](#installation)

  * [Usage](#usage)
  
  * [Test](#test)

  * [Contributions](#contributions)

  * [Contact](#contact)

  * [License](#license)

  * [GitHub Nane](#githubname)

  * [GitHubRepo](#githubrepo)

  * [Images](#images)
  
  ## Installation
  ${response.install}

  ## Usage
  ${response.usage}

  ## Test
  ${response.test}

  ## Contributions
  ${response.contribution}
    
  ###  Contact
  ${response.question}
    
  ### License
  ${license}
   
  ### GitHub Name
  ${response.GitHubName}
  
  ### GitHub Repo
   ${response.GitHubRepo}

  ### Images  
  ${response.images}`;
}

module.exports = generateMarkdown
