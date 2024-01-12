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

router.get("/document/:id", documentsController.getDocument);

router.post("/document/create", documentsController.createDocument);

router.post("/document/:id/update", documentsController.updateDocument);

router.post("/document/:id/delete", documentsController.deleteDocument);

module.exports = router;
