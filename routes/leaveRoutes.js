var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const { connect } = require('.');

/* 
  "/leave/create"
    * 'post' to add new leave
  "/leave/:id/delete"
    * 'post' to delete
  "/leave/:id/update"
    * 'post' to edit
  "/leave/:id"
    * "get" get leave
  "/leaves"
    * 'get' get leaves
*/

/* GET leaves listing. */
router.get('/leaves', function(req, res, next) {
  res.send("get all leaves.")
});

router.get("/leave/:id", (req, res) => {
  res.send(`get leave by id: ${id}`);
});

router.post("/leave/create", (req, res) => {
  res.send("add new leave request!");
});

router.post("/leave/:id/update", (req, res) => {
  res.send("edit leave details!");
})

router.post("/leave/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
