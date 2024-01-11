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

router.get("/employmentdetail/:id", (req, res) => {
  res.send(`get employmentdetail by id: ${id}`);
});

router.post("/employmentdetail/create", (req, res) => {
  res.send("add new employmentdetail request!");
});

router.post("/employmentdetail/:id/update", (req, res) => {
  res.send("edit employmentdetail details!");
})

router.post("/employmentdetail/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
