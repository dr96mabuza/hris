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

// connection.query("INSERT INTO leaves (leave_type, reason, start_date, end_date, days_absent, employee_id, approval) "+
// "VALUES" +
// "('Vacation', 'Annual vacation', '2022-05-01', '2022-05-05', 5, 1, true)," +
// "('Sick Leave', 'Flu', '2022-06-10', '2022-06-15', 6, 2, false);"
// , (error, results) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(results)
// })

module.exports = connection;