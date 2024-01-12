var express = require('express');
var router = express.Router();
const employmentDetailsController = require("./../controllers/employmentDetailsController");

/* 
  "/employmentdetail/create"
    * 'post' to add new employmentdetail
  "/employmentdetail/:id/delete"
    * 'post' to delete
  "/employmentdetail/:id/update"
    * 'post' to edit
  "/employmentdetail/:id"
    * "get" get employmentdetail
  "/employmentdetails"
    * 'get' get employmentdetails
*/

/* GET employmentdetails listing. */
router.get('/employmentdetails', employmentDetailsController.getEmploymentDetails);

router.get("/employmentdetail/:id", employmentDetailsController.getEmploymentDetail);

router.post("/employmentdetail/create", employmentDetailsController.createEmploymentDetail);

router.post("/employmentdetail/:id/update", employmentDetailsController.updateEmploymentDetail)

router.post("/employmentdetail/:id/delete", employmentDetailsController.deleteEmploymentDetail)

module.exports = router;
