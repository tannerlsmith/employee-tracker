const inquirer = require ('inquirer')
// Needs to connect class(11)
require('console.table')
const connection = require ('./db/connection')

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
                },
                {
                    name: 'exit',
                    value: 'exit',
                }
            ]
        }
    ]).then(answers => {
        console.log(answers)

        if (answers.choice === 'viewDepartments') {
            viewDepartments()
        } 

        else if (answers.choice === 'viewRoles') {
            viewRoles()
        }

        else if (answers.choice === 'viewEmployees') {
            viewEmployees()
        }

        else {
            console.log('Goodbye.')
            connection.end()
        }


    })
}

function viewEmployees() {
    var queryEmployees = 'SELECT * FROM employee;'
    connection.query(queryEmployees, (err, data) => {
        if (err) throw err;
        console.table(data)
        menu();
    })
}

function viewRoles() {
    var queryRoles = 'SELECT * FROM role;'
    connection.query(queryRoles, (err, data) => {
        if (err) throw err;
        console.table(data)
        menu();
    })
}

function viewDepartments() {
    var queryDepartment = 'SELECT * FROM department;'
    connection.query(queryDepartment, (err, data) => {
        if (err) throw err;
        console.table(data)
        menu();
    })
}

menu()

// at the end create option called exit

// name: = menu
// .query()
// select alal from department = SELECT * FROM department
// console.table makes it look like table in terminal


// NEXT STEPS: 
// add departments
// add roles
// add employees

// use terminal commands 