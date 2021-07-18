const inquirer = require ('inquirer')
const db = require('./db')
require('console.table')

function commands() {
    inquirer.prompt = ([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View all employees',
                },
                {
                    name: 'View employees by department',
                },
                {
                    name: "View All Employees By Manager",
                },
                {
                    name: "Add Employee",
                },
                {
                    name: "Remove Employee",
                },
                {
                    name: "Update Employee Role",
                },
                {
                    name: "Update Employee Manager",
                },
                {
                    name: "View All Roles",
                },
                {
                    name: "Add Role",
                },
                {
                    name: "Remove Role",
                },
                {
                    name: "View All Departments",
                },
                {
                    name: "Add Department",
                },
                {
                    name: "Remove Department",
                },
                {
                    name: "Quit",
                }
        
            ]
        }
    ])


}