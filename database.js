const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
});

connection.connect((error) => {
  if (error instanceof Error) {
    console.log(error);
    return;
  }
});

// connection.query("ALTER TABLE employees ADD username varchar(255) "
// , (error, results) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(results)
// })

module.exports = connection;
