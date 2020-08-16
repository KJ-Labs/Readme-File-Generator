function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**


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
- [Github](#email) 


## Installation

 ${data.install}

## Usage

${data.usage}

## license

${data.license}
![Badges](https://img.shields.io/badge/License-${data.license}-Blue)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions

${data.questions}

## Repository

- [Project Repo]("https://github.com/KJ-Labs/${data.repo}")


## Github
- ${data.email}
- ${data.username}
- [Github Link](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;