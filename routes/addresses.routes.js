var express = require("express");
var router = express.Router();
const addressesController = require("../controllers/addresses.controller");

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
router.get("/addresses", addressesController.getAddresses);

router.get("/address/:id", addressesController.getAddress);

router.post("/address/create", addressesController.createAddress);

router.post("/address/:id/update", addressesController.updateAddress);

router.post("/address/:id/delete", addressesController.deleteAddress);

module.exports = router;
