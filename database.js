const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "mysql-1d05d6da-dr96mabuza-d0a4.a.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_9j8E2X6yQh9ZQfZz1A4",
    port: 19586,
    database: "hr-management-db"
});

connection.connect((error) => {
    if (error instanceof Error) {
        console.log(error);
        return;
    }
});



module.exports = connection;