// User starts by entering node index.js  <-------------- Pseudocode written before I read the whole assignment readme
// Have a constructor (or class?) for a generic 'team member' object (properites of name, role, ID, email, officeNumber)
// User is prompted to come up with the team manager's name
// user is prompted to enter the team manager's employee ID
// user is prompted to enter the team manager's email address
// user is prompted to enter the team manager's office number
// Each data prop is stored in an 'team manager' object and added to the team array
// user is then prompted to choose between "add intern", "add engineer" or "i'm done" (this should be it's own function with an inquirer, called in different places)
// if user chooses engineer, then
// user is prompted to come up with the engineer's name
// user is prompted to enter the engineer's employee ID
// user is prompted to enter the engineer's email address
// user is prompted to enter the engineer's github username
// Each data prop is stored in an 'engineer' object and added to the team array
// user is then taken back to step 8 and an 'engineer' object is created (properties of name, role, id, email and github) (recurssion?)
// if user chooses intern, then
// user is prompted to come up with the intern's name
// user is prompted to enter the intern's employee ID
// user is prompted to enter the intern's email
// user is prompted to enter the intern's school
// Each data prop is stored in an 'intern' object and added to the team array
// user is then taken back to step 8 and an 'intern' object is created (properties of name, role, id, email and school) (recurssion?)
// if the user chooses 'I'm done' exit the loop and call a function to generateHTML
// For each object that was created, make an HTML card
// fill out the HTML card with each of the properties (based on whether it was a PM, Eng, or intern)

//initialize packages

const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//questions array
//Note: The 'enter next team member' is the first question (since that choice determines the class-specifc questions)
//We don't want it to run on the first prompt, so it's skipped if team array length is 0
const questions = [
    {
        type: 'list',
        name: 'nextMember',
        message: "Enter next team member role (or select 'I'm done')",
        choices: ['Engineer', 'Intern', "I'm done"],
        when: () => team.length !== 0
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter the Manager's name",
        when: () => team.length === 0
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter the Engineer's name",
        when: (answers) => answers.nextMember === "Engineer"
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter the Intern's name",
        when: (answers) => answers.nextMember === "Intern"
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter their employee ID',
        when: (answers) => answers.nextMember !== "I'm done"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter their employee email',
        when: (answers) => answers.nextMember !== "I'm done"
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "Enter their office number",
        when: () => team.length === 0
    },
    {
        type: 'input',
        name: 'git',
        message: "Enter their Github username",
        when: (answers) => answers.nextMember === "Engineer"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter their current or former school",
        when: (answers) => answers.nextMember === "Intern"
    }
];

function writeHTML(team){
    fs.writeFile("./dist/index.html", generateHTML(team), (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

function init() {
    //Team members (an array of objects)
    const team = [];
    //inquirer is called to ask user questions
    inquirer
    .prompt(questions)
    .then((response) => {
        //so long as the user didn't choose i'm done, an object is constructed based on the class that the user chose.
        //the only exception is the first loop (when the array is empty) in which case a manager object is created.
        if(response.nextMember !== "I'm done"){
            if(team.length === 0){
                const teamManager = new Manager(response.name, response.id, response.email, response.officeNum);
                team.push(teamManager);
            }
            else if(response.nextMember === "Engineer"){
                const teamManager = new Engineer(response.name, response.id, response.email, response.git);
                team.push(teamManager);
            }
            else if(response.nextMember === "Intern"){
                const teamManager = new Intern(response.name, response.id, response.email, response.school);
                team.push(teamManager);
            }
            console.log(team)
            // After making the object, the init function is called recurssively to go through the prompts again
            init();
        }
        else {
            //If we're done, the makeCards() function is called to render a card per team member(passing in an array of objects)
            writeHTML(team);
            console.log("Your HTML has been generated")
        }
    })
};

init();