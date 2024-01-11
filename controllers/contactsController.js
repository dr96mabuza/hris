const connection = require("../database");

exports.getContacts = (req, res) => {
    connection.query("select * from contacts", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createContact = (req, res) => {
    res.send("create new Contact request!");
};

exports.getContact = (req, res) => {
    res.send(`get Contact by id: ${id}`);
};

exports.updateContact = (req, res) => {
    res.send("edit Contact details!");
};

exports.deleteContact = (req, res) => {
    res.send(`delete ${req.params.id}`);
}