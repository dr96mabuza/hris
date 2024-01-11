var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const { connect } = require('.');

/* 
  "/employee/create"
    * 'post' to add new employee
  "/employee/:id/delete"
    * 'post' to delete
  "/employee/:id/update"
    * 'post' to edit
  "/employee/:id"
    * "get" get employee
  "/employees"
    * 'get' get employees
*/

/* GET employees listing. */
router.get('/employees', function(req, res, next) {
  res.send("get all employees.")
  // const connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   port: 3306,
  //   database: "hris"
  // });
    
  // connection.connect((error) => {
  //   if (error instanceof Error) {
  //     res.json(error);
  //   }
  //   connection.query("select * from employees", (error, rows, fields) => {
  //     if (error) {
  //       res.send(error);
  //     };
  //     connection.end();
  //     res.json(rows);
  //   });
  // });
});

router.get("/employee/:id", (req, res) => {
  res.send(`get employee by id: ${id}`);
  
  // const connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   port: 3306,
  //   database: "hris"
  // });
    
  // connection.connect((error) => {
  //   if (error instanceof Error) {
  //     res.json(error);
  //   }

  //   res.json({count: connection.query("count * from employees", (error, results))});
  //   connection.end();
    // if (connection.query("count * from employees", (error, results))) {
      
    // }
    // connection.query(`select * where id = ${id}`, (error, rows, fields) => {
    //   if (error) {
    //     res.send(error);
    //   }
    //   res.json({"rows": rows});
    // });
  // });
});

router.post("/employee/create", (req, res) => {
  res.send("add new employee request!");
});

router.post("/employee/:id/update", (req, res) => {
  res.send("edit employee details!");
})

router.post("/employee/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
