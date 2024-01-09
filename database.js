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
    console.log("connected");
});

module.exports = connection;
