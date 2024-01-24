var express = require("express");
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
router.get("/compansations", compansationController.getCompansations);

router.get("/compansation/:id", compansationController.getCompansation);

router.post("/compansation/create", compansationController.createCompansation);

router.post(
  "/compansation/:id/update",
  compansationController.updateCompansation,
);

router.post(
  "/compansation/:id/delete",
  compansationController.deleteCompansation,
);

module.exports = router;
