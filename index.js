
// List of packages required to run program. 
var inquirer = require("inquirer");
var generateMarkdown = require("./markdown/generateMarkdown");
var axios = require("axios");
var fs = require("fs");


// Generates all the questions to the user, with defaults applied to prevent blank spaces. 
const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username", 
    default: "KJ-Labs"
  },

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Readme File Generator "
  },

  {
    type: "input",
    message: "What is your github repo named?",
    name: "repo",
    default: "Readme-File-Generator"
  },

  {
    type: "input",
    message: "How do you describe your Project?.",
    name: "desc",
    default:
      "The purpose of this project is to create a customized readme file, without having to manually format the data and add all the sections needed."
  },

  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
    default: "Step 1: Run npm install"
  },

  {
    type: "input",
    message: "What are the steps required to run your project?",
    name: "usage",
    default:
    "Step 1. Run node index.js Step 2. Answer the questions presented Step 3.The README file will then be generated with your responses."
  },

  {
    type: "input",
    message:
      "Who made this project?",
    name: "contributors",
    default: "KJ-Labs"
  },

  {
    type: "input",
    message:
      "Are there any test examples for this project",
    name: "tests",
    default: "N/A"
  },

  {
    type: "input",
    message:
      "How should people contact you if there are questions?",
    name: "questions",
    default: "If you have any questions, please contact me on Github"
  },


  {
    type: "list",
    message: "What is the license for this project?",
    name: "license",
    choices: [  "MIT", "APACHE", "GNU"]

  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "email@gmail.com"
  }
];


function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    axios
      .get("https://api.github.com/users/" + answers.username)
      .then(response => {
        console.log(response);
        var imageURL = response.data.avatar_url;
        answers.image = imageURL;
        console.log(imageURL);
        fs.writeFile("README.md", generateMarkdown(answers), function(err) {
          if (err) {
            throw err;
          }
        });
      });
  });
}

init();