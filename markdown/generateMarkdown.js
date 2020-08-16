function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**
![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})

## Description 

${data.desc}

## Table of contents

- [Description](#Desc)
- [Installation](#Install)
- [Usage](#Usage)
- [License](#license)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 


## Installation

 ${data.install}

## Usage

${data.usage}

## Licence

${data.license}

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions

${data.questions}

## Repository

- [Project Repo](${data.repo})

## GitHub



`;
}

module.exports = generateMarkdown;