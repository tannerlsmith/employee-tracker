const inquirer = require ('inquirer')
require('console.table')
const connection = require ('./db/connection')
const addEmployeeQuestions = ['What is the first name?', 'What is the last name?', 'What is their role?', 'Who is their manager?']


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

        else if (answers.choice === 'addDepartment') {
            addDepartment()
        }

        else if (answers.choice === 'addEmployee') {
            addEmployee()
        }

        else {
            console.log('Goodbye.')
            connection.end()
        }
    })
}

// ===============FUNCTIONS=============== //
function addDepartment() { 
    inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "What Department would you like to add?"
        }
    ]).then(function(res) {
        var addDeptInq = connection.query(
            "INSERT INTO department SET ?",
            {
              name: res.name
            
            },
            function(err) {
                if (err) throw err
                console.table(res);
                menu();
            }
        )
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

function viewEmployees() {
    var queryEmployees = 'SELECT * FROM employee;'
    connection.query(queryEmployees, (err, data) => {
        if (err) throw err;
        console.table(data)
        menu();
    })
}


// WORKING ON THIS
function addEmployee() {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: 'first_name',
                    type: 'input', 
                    message: "What is the employee's fist name? ",
                },
                {
                    name: 'last_name',
                    type: 'input', 
                    message: "What is the employee's last name? "
                },
                {
                    name: 'manager_id',
                    type: 'input', 
                    message: "What is the employee's manager's ID? "
                },
                {
                    name: 'role', 
                    type: 'list',
                    choices: function() {
                    var roleArray = [];
                    for (let i = 0; i < res.length; i++) {
                        roleArray.push(res[i].title);
                    }
                    return roleArray;
                    },
                    message: "What is this employee's role? "
                }
                ]).then(function (answer) {
                    let role_id;
                    for (let a = 0; a < res.length; a++) {
                        if (res[a].title == answer.role) {
                            role_id = res[a].id;
                            console.log(role_id)
                        }                  
                    }  
                    connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        manager_id: answer.manager_id,
                        role_id: role_id,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log('Your employee has been added!');
                        menu();
                    })
                })
        })
};



// NEW FUNCTIONS
function addRole() {}
function updateEmployeeRole() {}



menu()
