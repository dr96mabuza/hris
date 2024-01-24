var express = require("express");
var router = express.Router();
const employeesController = require("./../controllers/employeesController");

/* GET employees listing. */
router.get("/employees", employeesController.getEmployees);
/* GET employee details */
router.get("/employee/:id", employeesController.getEmployee);
/* POST create new employee */
router.post("/employee/create", employeesController.createEmployee);
/* POST edit personal details*/
router.post("/employee/:id/update", employeesController.updateEmployee);
/* POST delete employee */
router.post("/employee/:id/delete", employeesController.deleteEmployee);

module.exports = router;
