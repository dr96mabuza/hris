var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const connection = require("../database");

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
      connection.end();
      res.json(rows);
    });
  });
});

router.post("/login", (req, res, next) => {
  connection.query(`select email from contacts where email=${req.body.email}`, (error, results) => {
    if (error) {
      res.json({status: "error", result: error})
    }
  })
})

router.post("/signup", (req, res) => {
  connection.query("", (error, results) => {
    if (error) {
      res.json({status: "error", result: error})
    }
  })
})

router.post("/search", (req, res) => {
  connection.query(`select * from employees where firstName like '%${req.body.search}%' or lastName like '%${req.body.search}%'`, (error, results) => {
    if (error) {
      res.json({status: "error", result: error})
    }
    res.json({status: "ok", result: results});
  })
})

module.exports = router;
