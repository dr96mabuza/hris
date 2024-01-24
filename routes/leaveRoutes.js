var express = require("express");
var router = express.Router();
const leaveController = require("./../controllers/leaveManangementController");

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
router.get("/leaves", leaveController.getLeaves);

router.get("/leave/:id", leaveController.getLeave);

router.post("/leave/create", leaveController.createLeave);

router.post("/leave/:id/update", leaveController.updateLeave);

router.post("/leave/:id/delete", leaveController.deleteLeave);

module.exports = router;
