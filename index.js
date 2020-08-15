var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var fs = require("fs");

// Require all npm packages and files

const questions = [
  // questions to user using "inquirer"
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
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
      " This application creates a customized readme file for your projects"
  },

  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
    default: "Step1: Run npm install and Step2: Run node index.js"
  },

  {
    type: "input",
    message: "What are the steps required to run your project?",
    name: "usage",
    default:
      "1.Run node index.js 2.Answer the question above 3.The README file will then be generated with your response."
  },

  {
    type: "input",
    message:
      "Who made this project?)",
    name: "contributors",
    default: "kjlabs"
  },

  {
    type: "input",
    message: "What is the license used?",
    name: "License",
    default: "MIT"
  }
];
//answers.username

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