const inquirer = require('inquirer');
const {htmlFormat, addingManager, addingEngineer, addingIntern} = require('./htmlFormat')
var fs = require('fs');

// manager and starting point when you run the code
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Write your name here:',
        name: 'managerName',
      },
      {
        type: 'input',
        message: 'Write your employee ID here:',
        name: 'managerID',
      },
      {
        type: 'input',
        message: 'Write your email here:',
        name: 'managerEmail',
      },
      {
        type: 'input',
        message: 'Office Number',
        name: 'officeNumber',
      },
  ])
  .then(data => {
    fs.writeFile('index.html', htmlFormat, err => {
      if (err) {
        console.error(err);
      }
    })
    console.log(data);
    addingManager(data);
    roleChoice();
  })

// question of what to take after
function roleChoice(){
  inquirer
  .prompt([
    {
        type: 'list',
        message: 'Choice your role',
        choices: ['Engineer', 'Intern'],
        name: 'choice',
      },
  ])
  .then(role => {
    console.log(role); //inturn();
    if (role.choice == 'Engineer') {
        engineer();
    }
    if (role.choice == 'Intern') {
        intern();
    }
  })
}

// engineer questions
function engineer(){
  inquirer
  .prompt([
    {
        type: 'input',
        message: 'Write your name here:',
        name: 'engineerName',
      },
      {
        type: 'input',
        message: 'Write your employee ID here:',
        name: 'engineerID',
      },
      {
        type: 'input',
        message: 'Write your email here:',
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: 'Write your Github username here:',
        name: 'github',
      },
  ])
  .then(engineerAnswers => {
    console.log(engineerAnswers);
    addingEngineer();
    roleChoice()
    menuReturn();
  })
}

// intern questions
function intern(){
  inquirer
  .prompt([
    {
        type: 'input',
        message: 'Write your name here:',
        name: 'internName',
      },
      {
        type: 'input',
        message: 'Write your employee ID here:',
        name: 'internID',
      },
      {
        type: 'input',
        message: 'Write your email here:',
        name: 'internEmail',
      },
      {
        type: 'input',
        message: 'Write your school here:',
        name: 'school',
      },
  ])
  .then(internAnswers => {
    console.log(internAnswers);
    addingIntern();
    menuReturn();
  })
}

// going back and adding more members
function menuReturn(){
inquirer
.prompt([
    {
        type: 'list',
        message: 'Choice your role',
        choices: ['Add more members', 'Finished adding members'],
        name: 'menuReturn',
      },
])
.then(menuReturn => {
  console.log(menuReturn);
  if (menuReturn.menuReturn == 'Add more members') {
    roleChoice();
  }
  if (menuReturn.menuReturn1 == 'Finished adding members') {
    console.log("Your HTML file is done");
  }
})
}

