const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, '');
const output = path.join(dirpath, 'index.html');
const allEmplyees = [];

const inputEmployee = () => {
    return inquirer.prompt(
        [
            {
                type:'input',
                name:'name',
                message: 'Type in your name.'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please type in your id number.'
                
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please type in your email address.'
            }
    ]).then(inputs => {
        // getting all answers for employee and pushing it to employee (starting w/ this since employee is the parent)
        const employee = new Employee(inputs.name, inputs.id, inputs.email);
        allEmplyees.push(employee);
        // need function
    })
};

const getTypeEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Select a type of Employee:',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
}
// new Employee().initializeEmployee();