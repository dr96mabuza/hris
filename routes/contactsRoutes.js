var express = require('express');
var router = express.Router();
const contactsController = require("./../controllers/contactsController")
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
router.get('/contacts', contactsController.getContacts);

router.get("/contact/:id", (req, res) => {
  res.send(`get contact by id: ${id}`);
});

router.post("/contact/create", (req, res) => {
  res.send("add new contact request!");
});

router.post("/contact/:id/update", (req, res) => {
  res.send("edit contact details!");
})

router.post("/contact/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
