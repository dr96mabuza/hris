var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const { connect } = require('.');

/* 
  "/contacts/create"
    * 'post' to add new contacts
  "/contacts/:id/delete"
    * 'post' to delete
  "/contacts/:id/update"
    * 'post' to edit
  "/contacts/:id"
    * "get" get contacts
  "/contacts"
    * 'get' get contacts
*/

/* GET contacts listing. */
router.get('/contacts', function(req, res, next) {
  res.send("get all contacts.")
});

router.get("/contacts/:id", (req, res) => {
  res.send(`get contacts by id: ${id}`);
});

router.post("/contacts/create", (req, res) => {
  res.send("add new contacts request!");
});

router.post("/contacts/:id/update", (req, res) => {
  res.send("edit contacts details!");
})

router.post("/contacts/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
