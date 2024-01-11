const connection = require("../database");

exports.getDocuments = (req, res) => {
    connection.query("select * from documents", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createDocument = (req, res) => {
    res.send("create new Document request!");
};

exports.getDocument = (req, res) => {
    res.send(`get Document by id: ${id}`);
};

exports.updateDocument = (req, res) => {
    res.send("edit Document details!");
};

exports.deleteDocument = (req, res) => {
    res.send(`delete ${req.params.id}`);
}