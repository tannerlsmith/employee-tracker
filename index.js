const inquirer = require ('inquirer')
// Needs to connect class(11)
require('console.table')

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View all employees',
                    value: 'viewEmployees',
                },
                {
                    name: 'View all roles',
                    value: 'viewRoles',
                },
                {
                    name: "View departments",
                    value: 'viewDepartments',
                },
                {
                    name: "Add an employee",
                    value: 'addEmployee',
                },
                {
                    name: "Add a role",
                    value: 'addRole',
                },
                {
                    name: "Add a department",
                    value: 'addDepartment', 
                },
                {
                    name: "Update an employee role",
                    value: 'updateEmployeeRole',
                }
            ]
        }
    ]).then(answers => {
        console.log(answers)
        if (answers.choice === 'viewDepartments') {
            console.log()
        }
    })
}

menu()


// name: = menu