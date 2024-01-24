var express = require("express");
var router = express.Router();
const contactsController = require("./../controllers/contactsController");
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
router.get("/contacts", contactsController.getContacts);

router.get("/contact/:id", contactsController.getContact);

router.post("/contact/create", contactsController.createContact);

router.post("/contact/:id/update", contactsController.updateContact);

router.post("/contact/:id/delete", contactsController.deleteContact);

module.exports = router;
