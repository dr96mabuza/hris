var express = require('express');
var router = express.Router();
const documentsController = require("./../controllers/documentsController");

/* 
  "/document/create"
    * 'post' to add new document
  "/document/:id/delete"
    * 'post' to delete
  "/document/:id/update"
    * 'post' to edit
  "/document/:id"
    * "get" get document
  "/documents"
    * 'get' get documents
*/

/* GET documents listing. */
router.get('/documents', documentsController.getDocuments);

router.get("/document/:id", (req, res) => {
  res.send(`get document by id: ${id}`);
});

router.post("/document/create", (req, res) => {
  res.send("add new document request!");
});

router.post("/document/:id/update", (req, res) => {
  res.send("edit document details!");
})

router.post("/document/:id/delete", (req, res) => {
  res.send(`delete ${req.params.id}`);
})

module.exports = router;
