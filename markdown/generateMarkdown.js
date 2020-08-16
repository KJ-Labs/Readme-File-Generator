function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**
![Badges](https://img.shields.io/badge/License-${data.license}-Blue)

## Description 

${data.desc}

## Table of contents

- [Description](#desc)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
- [Repository Link](#repository)



## Installation

 ${data.install}

## Usage

${data.usage}

## License
${data.license}



if (${data.license} = 'MIT') {
  "MIT License"
} else if (${data.license} =  'APACHE') {
  "Apache License"
} else {
 "GPL License"
}

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions

- ${data.questions}
- ${data.email}
- [${data.username}](https://github.com/${data.username})

## Repository

- [Project Repo](https://github.com/KJ-Labs/${data.repo})




`;
}

module.exports = generateMarkdown;