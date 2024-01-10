const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("mysql connected");
});

connection.query("CREATE DATABASE IF NOT EXISTS hris", (err) => {
    if (err) {
        throw err;
    }
});

module.exports = connection;
