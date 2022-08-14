// const { htmlPrefilter } = require("jquery");
// const { all } = require("micromatch");

// to display the inputs on an html file:
const showEmployees = (allInputs) => {
    // array for inputs to be inputted to the index.html
    const index = [];
    
    // EMPLOYEE INPUTS GOING INTO HTML TO DISPLAY!
    const displayEmployee = employee => {
        let showEmployee = 
            `<div>
                <div ${employee.name}></div>
                <div ${employee.id}></div>
                <div ${employee.email}></div>
            </div>`;
            html.push(showEmployee);
    }

// MANAGER INPUTS GOING INTO HTML TO DISPLAY!
const displayManager = manager => {
    let showManager = 
        `<div>
            <div ${manager.name}></div>
            <div ${manager.id}></div>
            <div ${manager.email}></div>
            <div ${manager.officeNumber}></div>
        </div>`;
        html.push(showManager);
        console.log(showManager());
}

// ENGINEER INPUTS GOING INTO HTML TO DISPLAY!
const displayEngineer = engineer => {
    let showManager = 
        `<div>
            <div ${engineer.name}></div>
            <div ${engineer.id}></div>
            <div ${engineer.email}></div>
            <div ${engineer.github}></div>
        </div>`;
        html.push(showEngineer);
        console.log(showEngineer());
}


// INTERN INPUTS GOING INTO HTML TO DISPLAY!
const displayIntern = intern => {
    let showIntern = 
        `<div>
            <div ${intern.name}></div>
            <div ${intern.id}></div>
            <div ${intern.email}></div>
            <div ${intern.github}></div>
        </div>`;
        html.push(showIntern);
        console.log(showIntern());
}


// FOR LOOP FOR EMPLOYEES
    for (let i=0; i<allInputs.length; i++) {
        if (allInputs[i].getRole() === "Employee") {
            displayEmployee(allInputs[i]);
        }
        if (allInputs[i].getRole() === "Manager") {
            displayManager(allInputs[i]);
        }
        if (allInputs[i].getRole() === "Engineer") {
            displayEngineer(allInputs[i]);
        }
        if (allInputs[i].getRole() === "Intern") {
            displayIntern(allInputs[i]);
        }
    }
        return html.join('');

}

module.exports = showEmployees(allInputs);

// module.exports = allInputs => {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/flatly/bootstrap.min.css" />
//         <link rel="stylesheet" href="/" src="/dist/css/index.css">
//         <title>Team Profiles</title>
//     </head>
//     <main >
    
//     <body> ${showEmployees(allInputs)} </body>
//     </main>
//     </html>
//     `
// }