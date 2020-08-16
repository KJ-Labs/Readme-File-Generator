function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

## Description 

${data.desc}

## Table of contents

- [Description](#Desc)
- [Installation](#Install)
- [Usage](#Usage)
- [License](#license)
- [Contributors](#Contributors)
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



## Repository

- [Project Repo](${data.repo})

## GitHub



`;
}

module.exports = generateMarkdown;