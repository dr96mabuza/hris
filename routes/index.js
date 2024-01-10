var express = require('express');
var router = express.Router();
const databaseController = require("../controllers/databaseController");

/* GET home page. */
router.get('/', function(req, res, next) {
  databaseController.connect_to_database;
  res.render('index', { title: 'Express' });
});

module.exports = router;
