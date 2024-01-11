var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* 
  "/compensation/create"
    * 'post' to add new compensation
  "/compensation/:id/delete"
    * 'post' to delete
  "/compensation/:id/update"
    * 'post' to edit
  "/compensation/:id"
    * "get" get compensation
  "/compensations"
    * 'get' get compensations
*/

/* GET compensations listing. */
router.get('/compensations', function(req, res, next) {
  res.send("get all compensations.")
});

router.get("/compensation/:id", (req, res) => {
  res.send(`get compensation by id: ${id}`);
});

router.post("/compensation/create", (req, res) => {
  res.send("add new compensation request!");
});

router.post("/compensation/:id/update", (req, res) => {
  res.send("edit compensation details!");
})

router.post("/compensation/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
