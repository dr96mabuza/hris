var express = require('express');
var router = express.Router();
const addressesController = require("./../controllers/addressesController");

/* 
  "/address/create"
    * 'post' to add new address
  "/address/:id/delete"
    * 'post' to delete
  "/address/:id/update"
    * 'post' to edit
  "/address/:id"
    * "get" get address
  "/addresses"
    * 'get' get addresses
*/

/* GET addresses listing. */
router.get('/addresses', addressesController.getAddresses);

router.get("/address/:id", (req, res) => {
  res.send(`get address by id: ${id}`);
});

router.post("/address/create", (req, res) => {
  res.send("add new address request!");
});

router.post("/address/:id/update", (req, res) => {
  res.send("edit address details!");
})

router.post("/address/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
