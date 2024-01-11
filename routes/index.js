var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* GET home page. */
router.get('/', function(req, res, next) {
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
    connection.query("select * from employees", (error, rows, fields) => {
      if (error) {
        res.send(error);
      }
      res.json(rows);
    });
  });
});

module.exports = router;
