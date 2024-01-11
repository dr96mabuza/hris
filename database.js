const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "hris"
});

connection.connect((error) => {
    if (error instanceof Error) {
        res.json(error);
    }
});

module.exports = connection;