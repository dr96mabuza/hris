var express = require('express');
var router = express.Router();
const compansationController = require("../controllers/compansationController");

/* 
  "/compansation/create"
    * 'post' to add new compansation
  "/compansation/:id/delete"
    * 'post' to delete
  "/compansation/:id/update"
    * 'post' to edit
  "/compansation/:id"
    * "get" get compansation
  "/compansations"
    * 'get' get compansations
*/

/* GET compansations listing. */
router.get('/compansations', compansationController.getCompansations);

router.get("/compansation/:id", (req, res) => {
  res.send(`get compansation by id: ${id}`);
});

router.post("/compansation/create", (req, res) => {
  res.send("add new compansation request!");
});

router.post("/compansation/:id/update", (req, res) => {
  res.send("edit compansation details!");
})

router.post("/compansation/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
