const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pxfij8kv',
    database: 'employees'
})

module.exports = connection;