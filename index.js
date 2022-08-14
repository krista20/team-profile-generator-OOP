const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, '');
const output = path.join(dirpath, 'index.html');
const allEmployees = [];


//BASE --> GETTING EMPLOYEE INPUTS
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
        allEmployees.push(employee);
        // returning back getTypeEmployee() here, since above is the parent element.
        getTypeEmployee();
    })
};


// USER SELECTING TYPE OF EMPLOYEE
const getTypeEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Select a type of Employee:',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then(answers => {
        switch (answers.menu) {
            case "Manager":
                managerInput();
                break;
            case "Engineer":
                engineerInput();
                break;
            case "Intern":
                internInput();
                break;
            default:
                allEmployees();
        }
    })
}


// MANAGER QUESTIONS
const managerInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Input your manager name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input your manager id number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input your manager email address:'
        },
        {
            input: 'input',
            name: 'officeNumber',
            message: 'Input your office number:'
        }
    ]).then(inputs => {
        const manager = new Manager('inputs.name', 'inputs.id', 'inputs.email', 'inputs.officeNumber');
        allEmployees.push(manager);
        getTypeEmployee();
    })
}


// ENGINEER QUESTIONS
const engineerInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Input your engineer name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input your engineer id number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input your engineer email address:'
        },
        {
            input: 'input',
            name: 'github',
            message: 'Input your Github Username:'
        }
    ]).then(inputs => {
        const engineer = new Engineer('inputs.name', 'inputs.id', 'inputs.email', 'inputs.github');
        allEmployees.push(engineer);
        getTypeEmployee();
    })
}


// INTERN QUESTIONS
const internInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Input your intern name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input your intern id number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input your intern email address:'
        },
        {
            input: 'input',
            name: 'school',
            message: 'Input your School name:'
        }
    ]).then(inputs => {
        const intern = new Intern('inputs.name', 'inputs.id', 'inputs.email', 'inputs.school');
        allEmployees.push(intern);
        getTypeEmployee();
    })
}


// CALLING BACK FUNCTION SO USER INPUTS ON TERMINAL CAN WORK
inputEmployee();